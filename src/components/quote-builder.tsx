"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, ArrowLeft, Building2, HardHat, Factory, MapPin } from "lucide-react";

type QuoteBuilderProps = {
  action: (formData: FormData) => Promise<void>;
};

const projectTypes = [
  { id: "industrial", label: "Industrial Facility", icon: Factory },
  { id: "civil", label: "Civil Construction", icon: Building2 },
  { id: "infrastructure", label: "Road & Infra", icon: MapPin },
  { id: "commercial", label: "Commercial Campus", icon: HardHat },
];

export function QuoteBuilder({ action }: QuoteBuilderProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: "",
    service: "",
    budget: "",
    projectLocation: "",
    targetStart: "",
    quantity: "",
    tenderType: "Private",
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const updateForm = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const nextStep = () => setStep((s) => Math.min(3, s + 1));
  const prevStep = () => setStep((s) => Math.max(1, s - 1));

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-[rgba(213,161,94,0.18)] bg-[#08111b]/80 p-8 shadow-2xl backdrop-blur-xl">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-1.5 w-12 rounded-full transition-colors duration-500 ${
                i <= step ? "bg-[#c96334]" : "bg-white/10"
              }`}
            />
          ))}
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-[#d5a15e]">
          Step {step} of 3
        </span>
      </div>

      <form action={action} className="relative min-h-[420px]">
        {/* Hidden inputs to ensure all data is submitted */}
        {Object.entries(formData).map(([key, value]) => (
          <input key={key} type="hidden" name={key} value={value} />
        ))}

        <AnimatePresence mode="wait" custom={1}>
          {step === 1 && (
            <motion.div
              key="step1"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex h-full flex-col justify-center gap-6"
            >
              <h3 className="font-display text-3xl font-normal tracking-wide text-white">
                What are you building?
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {projectTypes.map((type) => {
                  const Icon = type.icon;
                  const isSelected = formData.projectType === type.label;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => {
                        updateForm("projectType", type.label);
                        updateForm("service", type.label); // Mirroring for basic schema requirements
                      }}
                      className={`flex flex-col items-center gap-4 rounded-xl border p-6 transition-all duration-300 ${
                        isSelected
                          ? "border-[#c96334] bg-gradient-to-br from-[#c96334]/20 to-transparent text-white"
                          : "border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <Icon className="h-8 w-8" />
                      <span className="font-mono text-xs tracking-wider uppercase">{type.label}</span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex h-full flex-col gap-6"
            >
              <h3 className="font-display text-3xl font-normal tracking-wide text-white">
                Project Logistics
              </h3>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label>Location</Label>
                  <Input 
                    value={formData.projectLocation} 
                    onChange={(e) => updateForm("projectLocation", e.target.value)} 
                    placeholder="City, State" 
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Target Start</Label>
                  <Input 
                    value={formData.targetStart} 
                    onChange={(e) => updateForm("targetStart", e.target.value)} 
                    placeholder="Q3 2026, Immediate, etc." 
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Estimated Budget</Label>
                  <Input 
                    value={formData.budget} 
                    onChange={(e) => updateForm("budget", e.target.value)} 
                    placeholder="$1M - $5M" 
                  />
                </div>
                <div className="grid gap-2">
                  <Label>Approx. Quantity / Area</Label>
                  <Input 
                    value={formData.quantity} 
                    onChange={(e) => updateForm("quantity", e.target.value)} 
                    placeholder="100,000 sqft" 
                  />
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex h-full flex-col gap-6"
            >
              <h3 className="font-display text-3xl font-normal tracking-wide text-white">
                Contact & Brief
              </h3>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="grid gap-2"><Label>Name *</Label><Input value={formData.name} onChange={(e) => updateForm("name", e.target.value)} required /></div>
                <div className="grid gap-2"><Label>Email *</Label><Input type="email" value={formData.email} onChange={(e) => updateForm("email", e.target.value)} required /></div>
                <div className="grid gap-2"><Label>Phone *</Label><Input value={formData.phone} onChange={(e) => updateForm("phone", e.target.value)} required /></div>
                <div className="grid gap-2"><Label>Company</Label><Input value={formData.company} onChange={(e) => updateForm("company", e.target.value)} /></div>
                <div className="grid gap-2 md:col-span-2">
                  <Label>Project Brief *</Label>
                  <Textarea 
                    value={formData.message} 
                    onChange={(e) => updateForm("message", e.target.value)} 
                    rows={4} 
                    placeholder="Describe the scope, unique challenges, and requirements..."
                    required 
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute bottom-0 left-0 right-0 flex justify-between pt-6">
          {step > 1 ? (
            <Button type="button" variant="outline" onClick={prevStep} className="gap-2 border-white/10 bg-white/5 hover:bg-white/10">
              <ArrowLeft className="h-4 w-4" /> Back
            </Button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <Button 
              type="button" 
              onClick={nextStep} 
              disabled={step === 1 && !formData.projectType}
              className="gap-2 bg-gradient-to-r from-[#c96334] to-[#d5a15e] text-black hover:opacity-90"
            >
              Next Step <ArrowRight className="h-4 w-4" />
            </Button>
          ) : (
            <Button type="submit" className="gap-2 bg-gradient-to-r from-[#c96334] to-[#d5a15e] text-black hover:opacity-90">
              Submit Request <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
