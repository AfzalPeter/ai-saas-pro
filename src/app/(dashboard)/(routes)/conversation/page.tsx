"use client"

import Heading from '@/components/heading';
import { MessageSquare } from 'lucide-react';
import React from 'react'
import { useForm } from 'react-hook-form';
import * as z from "zod";
import { formSchema } from './constants';
import {zodResolver} from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
//here @hookform is the name of package while other @ is alias

const ConversationPage = () => {
const form = useForm<z.infer<typeof formSchema>>({

    resolver: zodResolver(formSchema),
    defaultValues:{
        prompt:""
    }
});

//-----------------------------------------------------------------
const isLoading = form.formState.isSubmitting;
  
const onSubmit = async (values: z.infer<typeof formSchema>) => {
  console.log(values);
  
//     try {
//     const userMessage: ChatCompletionRequestMessage = { role: "user", content: values.prompt };
//     const newMessages = [...messages, userMessage];
    
//     const response = await axios.post('/api/conversation', { messages: newMessages });
//     setMessages((current) => [...current, userMessage, response.data]);
    
//     form.reset();
//   } catch (error: any) {
//     if (error?.response?.status === 403) {
//       proModal.onOpen();
//     } else {
//       toast.error("Something went wrong.");
//     }
//   } finally {
//     router.refresh();
//   }
}

//------------------------------------------------

    return (
        <div>
            <Heading 
            title='Conversation'
            description='Our most advance conversation model.'
            icon={MessageSquare}
            iconColor='text-violet-500'
            bgColor='bg-violet-500/10'
            />
            <div className="px-4 lg:px-8">
                <div>
                    <Form {...form}>
                    <form 
                    onSubmit={form.handleSubmit(onSubmit)} 
                    className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"> 
                        <FormField name="promt" render={({field})=>(
                            <FormItem className="col-span-12 lg:col-span-10">
                                <FormControl className="m-0 p-0">
                                    <Input className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                    disabled={isLoading} placeholder="How do I calculate the radius of a circle?" 
                                    {...field} />
                                </FormControl>
                            </FormItem> 
                        )}/>
                        <Button className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">Generte</Button>
                    </form>
                    </Form>
                </div>

            </div>
        </div>
    )
}

export default ConversationPage;