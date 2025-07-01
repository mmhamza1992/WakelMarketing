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
    <section id="contact" className="section-spacing bg-white">
      <div className="container-spacing">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <div className="inline-block bg-wakel-secondary text-wakel-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              {language === 'en' ? 'Get Started' : 'ابدأ معنا'}
            </div>

            <h2 className="text-headline text-wakel-text mb-6">
              {contactContent.title}
            </h2>
            
            <p className="text-body-large max-w-2xl mx-auto">
              {contactContent.subtitle}
            </p>
          </div>
          
          <div className="card-elevated p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-body font-semibold text-wakel-text">
                          {contactContent.form.name} *
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="h-14 text-base border-2 border-gray-200 focus:border-wakel-primary rounded-xl transition-all duration-200 bg-wakel-surface"
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
                        <FormLabel className="text-body font-semibold text-wakel-text">
                          {contactContent.form.company} *
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="h-14 text-base border-2 border-gray-200 focus:border-wakel-primary rounded-xl transition-all duration-200 bg-wakel-surface"
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
                      <FormLabel className="text-body font-semibold text-wakel-text">
                        {contactContent.form.email} *
                      </FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email"
                          className="h-14 text-base border-2 border-gray-200 focus:border-wakel-primary rounded-xl transition-all duration-200 bg-wakel-surface"
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
                      <FormLabel className="text-body font-semibold text-wakel-text">
                        {contactContent.form.message} *
                      </FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={6}
                          className="text-base border-2 border-gray-200 focus:border-wakel-primary rounded-xl transition-all duration-200 resize-none bg-wakel-surface"
                          placeholder={language === 'en' ? 'Tell us about your AI product and MENAT expansion goals...' : 'أخبرنا عن منتج الذكاء الاصطناعي وأهداف التوسع في المنطقة...'}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="pt-6">
                  <button 
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="btn-primary w-full"
                  >
                    {contactMutation.isPending ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>{language === 'en' ? 'Sending...' : 'جاري الإرسال...'}</span>
                      </div>
                    ) : (
                      contactContent.form.submit
                    )}
                  </button>
                </div>
              </form>
            </Form>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-body text-wakel-muted">
              {language === 'en' 
                ? 'Typically respond within 24 hours • All conversations are confidential'
                : 'نرد عادة خلال 24 ساعة • جميع المحادثات سرية'
              }
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
