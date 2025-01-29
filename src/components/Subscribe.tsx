import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

const Subscribe = () => {
  return (
    <section className="py-16 px-4">
      <Card className="max-w-6xl mx-auto overflow-hidden">
        <CardContent className="p-0">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Decorative Background */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-500 to-blue-600 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-white/10 rounded-full p-6 inline-block mb-6">
                  <Mail className="w-12 h-12 text-white animate-pulse" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Stay Updated
                </h3>
                <p className="text-blue-100 text-sm md:text-base">
                  Join our newsletter and never miss an update
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 p-8 flex flex-col justify-center">
              <div className="max-w-xl">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Get our email updates
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  We would love to keep you updated by email with new videos and
                  inspiring stories from around the world, as well as opportunities to
                  get involved and make a difference.
                </p>
                
                <form className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="flex-1"
                    />
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
                    >
                      Subscribe
                      <Mail className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Subscribe;