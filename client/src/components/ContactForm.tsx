import { motion } from 'framer-motion';
import { useLanguage } from '@/hooks/use-language';
import { content } from '@/lib/content';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertLeadSchema, type InsertLead } from '@shared/schema';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

export default function ContactForm() {
  const { language } = useLanguage();
  const contactContent = content[language].contact;
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema.extend({
      name: insertLeadSchema.shape.name.min(2, contactContent.form.nameRequired),
      company: insertLeadSchema.shape.company.min(2, contactContent.form.companyRequired),
      email: insertLeadSchema.shape.email.email(contactContent.form.emailRequired),
      message: insertLeadSchema.shape.message.min(10, contactContent.form.messageRequired),
    })),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      message: '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertLead) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      form.reset();
      toast({
        title: contactContent.form.success,
        description: '',
      });
    },
    onError: (error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: InsertLead) => {
    contactMutation.mutate(data);
  };

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-wakel-text mb-6">
            {contactContent.title}
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            {contactContent.subtitle}
          </p>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{contactContent.form.name} *</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="rounded-2xl h-12 focus:ring-2 focus:ring-wakel-primary transition-all duration-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{contactContent.form.company} *</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="rounded-2xl h-12 focus:ring-2 focus:ring-wakel-primary transition-all duration-200"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{contactContent.form.email} *</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        type="email"
                        className="rounded-2xl h-12 focus:ring-2 focus:ring-wakel-primary transition-all duration-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{contactContent.form.message} *</FormLabel>
                    <FormControl>
                      <Textarea 
                        {...field} 
                        rows={5}
                        className="rounded-2xl focus:ring-2 focus:ring-wakel-primary transition-all duration-200 resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full gradient-bg text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 h-auto"
              >
                {contactMutation.isPending ? '...' : contactContent.form.submit}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
