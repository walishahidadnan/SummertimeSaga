import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I download the Summertime Saga MOD version?",
      answer: "You can download it directly from our website by clicking the download button. Follow our step-by-step installation guide in the Install section above.",
    },
    {
      question: "Is there a version for iOS or iPhone?",
      answer: "Yes! While it's not available on the App Store, you can install it using third-party installers like AppValley or AltStore. Check our iOS installation guide for detailed steps.",
    },
    {
      question: "Is Summertime Saga MOD APK safe to download?",
      answer: "Yes, our MOD APK is completely safe and secure, free from bugs, errors, and malware. We regularly test and update our files to ensure safety.",
    },
    {
      question: "Can I play Summertime Saga offline?",
      answer: "Once you download and install the APK, you can play the game offline without an internet connection. The full game is playable offline.",
    },
    {
      question: "Will my save files carry over to the MOD version?",
      answer: "Yes, you can transfer your progress! Simply locate your save folder from the original version and copy it into the MOD installation's save folder.",
    },
    {
      question: "What's included in the MOD version?",
      answer: "The MOD version includes unlimited money, all characters unlocked, all locations accessible, unlocked cookie jar, HD content, and ad-free gameplay.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-pink/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-teal/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral/10 border border-coral/20 mb-4">
            <HelpCircle className="w-4 h-4 text-coral" />
            <span className="text-sm font-medium text-coral">Got Questions?</span>
          </div>
          <h2 className="font-poppins text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to the most common questions about Summertime Saga MOD APK.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-2xl px-6 border-0 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-poppins font-semibold text-foreground hover:text-primary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;