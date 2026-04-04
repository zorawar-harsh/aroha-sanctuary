import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setIsSubmitting(true);
    setResult("Sending...");
    
    const formData = new FormData(form);
    // Your unique Web3Forms Access Key
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully! I will get back to you soon.");
        form.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error(error);
      setResult("Something went wrong! Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden"
      >
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-serif text-amber-950 mb-6 text-center">Get in Touch</h1>
          <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
            I am here to hold space for you. Send me a message, and I'll get back to you as soon as I can.
          </p>
          
          <form onSubmit={onSubmit} className="flex flex-col gap-6 max-w-md mx-auto">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-amber-950 mb-2">Name</label>
              <input 
                type="text" 
                id="name"
                name="name" 
                required 
                className="w-full p-3 bg-transparent border border-amber-900/30 rounded-xl focus:outline-none focus:border-amber-900 focus:ring-1 focus:ring-amber-900 transition-all" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-base font-bold text-amber-950 mb-2">Email</label>
              <input 
                type="email" 
                id="email"
                name="email" 
                required 
                className="w-full p-3 bg-transparent border border-amber-900/30 rounded-xl focus:outline-none focus:border-amber-900 focus:ring-1 focus:ring-amber-900 transition-all" 
              />
            </div>
            <div>
            <label htmlFor="message" className="block text-base font-bold text-amber-950 mb-2">Message</label>
            <textarea  
                name="message" 
                required 
                rows={5} 
                className="w-full p-3 bg-transparent border border-amber-900/30 rounded-xl focus:outline-none focus:border-amber-900 focus:ring-1 focus:ring-amber-900 transition-all resize-none" 
              ></textarea>
            </div>

            {/* Hidden fields to make the email look cleaner */}
            <input type="hidden" name="subject" value="New Contact from Aroha Sanctuary" />
            <input type="hidden" name="from_name" value="Aroha Website" />

            <button 
              type="submit" 
              disabled={isSubmitting}
            className="w-full bg-amber-900 text-white py-4 px-8 rounded-xl hover:bg-amber-950 transition-colors disabled:opacity-70 disabled:cursor-not-allowed font-bold text-lg mt-2 shadow-sm"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {result && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`text-center text-sm mt-4 ${result.includes("Successfully") ? "text-green-700" : "text-amber-900"}`}
              >
                {result}
              </motion.p>
            )}
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;