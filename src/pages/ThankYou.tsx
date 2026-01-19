import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle, Mail, Package, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const ThankYou = () => {
  return (
    <Layout>
      <Helmet>
        <title>Thank You for Your Order | Crystal Bloomery</title>
        <meta name="description" content="Your order has been confirmed. You'll receive tracking information via email shortly." />
      </Helmet>

      <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg w-full text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center"
          >
            <CheckCircle className="w-10 h-10 text-primary" />
          </motion.div>

          <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            Thank You for Your Order!
          </h1>

          <p className="text-muted-foreground text-lg mb-8">
            Your order has been confirmed and is being prepared with care.
          </p>

          <div className="bg-card border border-border rounded-lg p-6 mb-8 space-y-4">
            <div className="flex items-center gap-4 text-left">
              <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Confirmation Email</h3>
                <p className="text-sm text-muted-foreground">
                  A confirmation email is on its way to your inbox.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-left">
              <div className="w-10 h-10 rounded-full bg-secondary/50 flex items-center justify-center flex-shrink-0">
                <Package className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Tracking Information</h3>
                <p className="text-sm text-muted-foreground">
                  You'll receive tracking details via email once your order ships.
                </p>
              </div>
            </div>
          </div>

          <Button asChild size="lg" className="group">
            <Link to="/shop">
              Continue Shopping
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </Layout>
  );
};

export default ThankYou;
