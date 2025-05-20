import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { CheckCircle2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface SuccessDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessDialog = ({ isOpen, onClose }: SuccessDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden bg-white rounded-lg">
        <div className="relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Success content */}
          <div className="p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              className="mx-auto mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-eco-green/20 rounded-full blur-xl"></div>
                <CheckCircle2 className="h-20 w-20 text-eco-green relative z-10 mx-auto" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Message Sent Successfully!
              </h2>
              <div className="space-y-3 text-gray-600">
                <p className="text-lg">
                  Thank you for contacting Ecomotech!
                </p>
                <p>
                  We have received your message and will get back to you shortly.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <Button
                onClick={onClose}
                className="bg-eco-green hover:bg-eco-green-dark text-white px-8 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Close
              </Button>
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-eco-green via-eco-blue to-eco-green"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessDialog; 