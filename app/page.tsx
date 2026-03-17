"use client";
import React, { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  Droplets,
  Shield,
  Sparkles,
  Leaf,
  ArrowRight,
  Star,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  Zap,
  Heart,
  Wind,
  Dumbbell,
  ChefHat,
  Baby,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const HERO_ART = "/PINK1.webp";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

function cn(...classes: Array<string | number | boolean | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Pill({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 rounded-2xl border bg-white/60 p-2 shadow-sm backdrop-blur">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-muted-foreground">{desc}</div>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border bg-white/60 p-4 shadow-sm backdrop-blur">
      <div className="text-2xl font-semibold tracking-tight">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function Feature({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {items.map((t) => (
          <div key={t} className="flex items-start gap-2 text-sm">
            <Check className="mt-0.5 h-4 w-4" />
            <div className="text-muted-foreground">{t}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function Testimonial({ name, meta, quote, rating = 5 }: { name: string; meta: string; quote: string; rating?: number }) {
  return (
    <Card className="rounded-2xl h-full flex flex-col">
      <CardContent className="pt-6 flex-1 flex flex-col">
        <div className="flex items-center gap-1">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current" />
          ))}
        </div>
        <p className="mt-3 text-sm text-muted-foreground flex-1">"{quote}"</p>
        <div className="mt-4 text-sm">
          <div className="font-medium">{name}</div>
          <div className="text-muted-foreground">{meta}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      className="w-full rounded-2xl border bg-white/60 p-4 text-left shadow-sm backdrop-blur transition hover:bg-white/70"
      aria-expanded={open}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 font-medium">
            <HelpCircle className="h-4 w-4" />
            {q}
          </div>
          {open ? (
            <p className="mt-2 text-sm text-muted-foreground">{a}</p>
          ) : null}
        </div>
        <div className={cn("mt-1 text-muted-foreground transition", open ? "rotate-90" : "")}>›</div>
      </div>
    </button>
  );
}

function TestimonialCarousel() {
  const [currentSet, setCurrentSet] = useState(0);

  const testimonials = [
    {
      name: "Dorian",
      meta: "Heat training athlete",
      quote: "Washed some clothes I use for heat training - so the sweatiest clothes possible. I'm really impressed with how it pretty much completely neutralized all odours. Have used sport specific detergents in the past and they've not been this good.",
      rating: 5,
    },
    {
      name: "Mark",
      meta: "Sensitive skin user",
      quote: "Worked a treat on my bedsheets, not had any flare up on my skin at all, was a nice neutral smell to my sheets and brought them out nice and clean.",
      rating: 5,
    },
    {
      name: "Barry",
      meta: "Trainer washing",
      quote: "40 degrees on 2 pairs of trainers and both were certainly kinder of the nasal passage.",
      rating: 5,
    },
    {
      name: "Lynsey",
      meta: "Odour removal",
      quote: "One of her cotton jumpers had an awful smell. One wash… gone.",
      rating: 5,
    },
    {
      name: "Cain",
      meta: "Dry skin relief",
      quote: "Very impressed on how they turned just very soft on the areas that i have dry skin. The socks worked well and the half tights that i wore feel so soft.",
      rating: 5,
    },
    {
      name: "Iona",
      meta: "Sensitive skin",
      quote: "If there were any irritants I'd usually get an outline of the clothes on my skin - but nothing.",
      rating: 5,
    },
    {
      name: "Susan",
      meta: "General use",
      quote: "Good for environmental purposes.",
      rating: 5,
    },
    {
      name: "Angie",
      meta: "Towel washing",
      quote: "Used on Towels - Will purchase in the new year.",
      rating: 5,
    },
  ];

  const totalSets = Math.ceil(testimonials.length / 4);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % totalSets);
    }, 10000); // Change every 10 seconds

    return () => clearInterval(interval);
  }, [totalSets]);

  const currentTestimonials = testimonials.slice(
    currentSet * 4,
    (currentSet + 1) * 4
  );

  return (
    <div className="relative">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {currentTestimonials.map((testimonial, idx) => (
          <motion.div
            key={`${currentSet}-${idx}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Testimonial {...testimonial} />
          </motion.div>
        ))}
      </div>

      {/* Carousel indicators */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {Array.from({ length: totalSets }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSet(idx)}
            className={cn(
              "h-2 rounded-full transition-all",
              idx === currentSet
                ? "w-8 bg-foreground"
                : "w-2 bg-foreground/20 hover:bg-foreground/40"
            )}
            aria-label={`Go to testimonial set ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function OxiaHomepage() {
  const [email, setEmail] = useState("");

const pricing = useMemo(
  () => [
    {
      name: "1kg",
      price: "£7.99",
      sub: "~33 washes",
      costPerWash: "£0.24 per wash",
      tag: "Try it",
      stripeLink: "https://buy.stripe.com/5kQ14m2JP8kDdb20xi7ss00",  
      bullets: [
        "Bio-enzyme formula for odour elimination",
        "Gentle on sensitive skin",
        "Light, neutral scent",
      ],
    },
    {
      name: "2kg",
      price: "£13.50",
      sub: "~65 washes",
      costPerWash: "£0.21 per wash",
      tag: "Best value",
      highlight: true,
      stripeLink: "https://buy.stripe.com/dRm7sK4RXeJ14Ewa7S7ss01",  
      bullets: [
        "Best cost per wash",
        "Ideal for families or active lifestyles",
        "Same gentle, effective formula",
      ],
    },
  ],
  []
);

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white text-foreground">
     
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `url(${HERO_ART})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <motion.div {...fadeUp} className="space-y-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" className="rounded-2xl bg-white/70">Bio-enzyme powered</Badge>
              <Badge variant="secondary" className="rounded-2xl bg-white/70">Sensitive skin safe</Badge>
              <Badge variant="secondary" className="rounded-2xl bg-white/70">Odour elimination</Badge>
            </div>

            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Clean gear. Calm skin.
              <span className="block text-muted-foreground">The detergent that tackles odours without irritating skin.</span>
            </h1>

            <p className="max-w-prose text-base text-muted-foreground">
              OXIA uses bio-enzymes to break down sweat proteins and odour-causing compounds at the source—not just mask them. 
              Gentle enough for sensitive skin, powerful enough for your sweatiest kit.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-2xl shadow-sm">
                <a href="#pricing">Shop now</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl bg-white/70">
                <a href="#how-it-works">How it works</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Breaks down odours
              </div>
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Low-irritant formula
              </div>
              <div className="flex items-center gap-2">
                <Wind className="h-4 w-4" />
                Light, fresh scent
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="grid gap-4">
            <Stat value="Bio-enzymes" label="Break down proteins & odours naturally" />
            <Stat value="Gentle surfactants" label="Clean without harsh chemicals" />
            <Stat value="Better for the planet" label="Short Cycle time. Works at 30°C." />
          </motion.div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <motion.div {...fadeUp} className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Built for active lives</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              Whether you're training, working, or just living—OXIA handles the odors life throws at you, 
              without the skin irritation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="rounded-2xl">
              <CardContent className="pt-6 space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border bg-rose-50">
                  <Dumbbell className="h-6 w-6" />
                </div>
                <div className="font-semibold">Athletes & gym-goers</div>
                <p className="text-sm text-muted-foreground">
                  Activewear, base layers, and gym gear hold onto sweat proteins. Bio-enzymes eliminate odours 
                  that regular detergent leaves behind.
                </p>
                <Button asChild variant="link" className="h-auto p-0 text-sm">
                  <Link href="/odour">Learn more about odour removal →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardContent className="pt-6 space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border bg-rose-50">
                  <ChefHat className="h-6 w-6" />
                </div>
                <div className="font-semibold">Chefs & hospitality workers</div>
                <p className="text-sm text-muted-foreground">
                  Kitchen smells—grease, garlic, onions—cling to uniforms. Our enzyme formula breaks down 
                  food odours and washes clean, even with frequent laundering.
                </p>
                <Button asChild variant="link" className="h-auto p-0 text-sm">
                  <Link href="/odour">How it tackles kitchen odours →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardContent className="pt-6 space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border bg-rose-50">
                  <Baby className="h-6 w-6" />
                </div>
                <div className="font-semibold">Parents & sensitive skin</div>
                <p className="text-sm text-muted-foreground">
                  Eczema, dermatitis, or just reactive skin? Low-irritant formula with no harsh fragrances. 
                  Safe for frequent washing without flare-ups.
                </p>
                <Button asChild variant="link" className="h-auto p-0 text-sm">
                  <Link href="/sensitive-skin">Sensitive skin details →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-14">
        <motion.div {...fadeUp} className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">The science: bio-enzymes</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl">
              Most detergents mask odours with heavy fragrance. OXIA eliminates them at the molecular level.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="rounded-2xl border-2">
              <CardHeader>
                <CardTitle className="text-lg">How traditional detergent works</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>• Removes visible dirt and stains</p>
                  <p>• Adds heavy fragrance to mask odours</p>
                  <p>• Leaves protein residue in synthetic fabrics</p>
                  <p>• Smell returns when you sweat</p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  How OXIA works
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>• <strong>Bio-enzymes (proteases)</strong> break down sweat proteins</p>
                  <p>• Eliminates odour compounds, doesn't mask them</p>
                  <p>• Gentle surfactants clean without residue</p>
                  <p>• Stays fresh even when you warm up</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-2xl border bg-white/70 p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              <Pill
                icon={Droplets}
                title="Bio-enzyme complex (5%)"
                desc="Proteases that break down sweat proteins and odour-causing compounds"
              />
              <Pill
                icon={Shield}
                title="Gentle surfactants (20%)"
                desc="Alkyl glycosides clean effectively without harsh chemicals"
              />
              <Pill
                icon={Leaf}
                title="Biodegradable formula"
                desc="Components break down naturally—low environmental impact"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Social Proof - Carousel */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <motion.div {...fadeUp} className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">What people notice</h2>
            <p className="mt-2 text-muted-foreground">Real feedback from real users.</p>
          </div>

          <TestimonialCarousel />
        </motion.div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-4 py-14">
        <motion.div {...fadeUp} className="space-y-8">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Simple pricing</h2>
              <p className="mt-2 text-muted-foreground">Buy when you need it. No subscriptions required.</p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {pricing.map((p) => (
              <Card
                key={p.name}
                className={cn(
                  "rounded-2xl",
                  p.highlight ? "border-foreground/20 bg-white" : "bg-white/70"
                )}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{p.name}</CardTitle>
                      <div className="text-sm text-muted-foreground">{p.sub}</div>
                    </div>
                    <Badge className="rounded-2xl" variant={p.highlight ? "default" : "secondary"}>
                      {p.tag}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-3xl font-semibold tracking-tight">{p.price}</div>
                    <div className="text-sm text-muted-foreground mt-1">{p.costPerWash}</div>
                  </div>
                  <div className="space-y-2">
                    {p.bullets.map((b) => (
                      <div key={b} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4" />
                        <div className="text-muted-foreground">{b}</div>
                      </div>
                    ))}
                  </div>
                  <Button asChild className="w-full rounded-2xl">
                    <a href={p.stripeLink} target="_blank" rel="noopener noreferrer">
                      Buy now
                    </a>
                  </Button>
                  <div className="text-xs text-muted-foreground">
                    Use 30g per wash. Always follow dosing guide for best results.
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-base">Try before you buy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4" />
                  <div className="text-muted-foreground">Free 60g samples available</div>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4" />
                  <div className="text-muted-foreground">2 washes worth</div>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 h-4 w-4" />
                  <div className="text-muted-foreground">Test it on your skin first</div>
                </div>
              </CardContent>
            </Card>
            <Feature title="Delivery" items={["UK-wide shipping", "Local drop (selected areas)", "Tracked delivery"]} />
          </div>
        </motion.div>
      </section>

      {/* CTA 
      <section id="cta" className="mx-auto max-w-6xl px-4 py-14">
        <motion.div {...fadeUp} className="overflow-hidden rounded-[28px] border bg-white/70 shadow-sm backdrop-blur">
          <div className="grid gap-8 p-8 md:grid-cols-2 md:p-10">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold tracking-tight md:text-2xl">Get washing tips & early access</h3>
              <p className="text-muted-foreground">
                Join our mailing list for care guides, dosing tips, and first access to restocks.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  className="h-11 rounded-2xl bg-white"
                  type="email"
                />
                <Button className="h-11 rounded-2xl">Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
            </div>

            <div className="grid gap-3">
              <div className="rounded-2xl border bg-white/70 p-4">
                <div className="text-sm font-medium">Best practices for sensitive skin</div>
                <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4" />Use the recommended dose (don't overdo it)</li>
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4" />Add an extra rinse for base layers</li>
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4" />Avoid fabric softener on technical fabrics</li>
                  <li className="flex gap-2"><Check className="mt-0.5 h-4 w-4" />Clean your machine monthly</li>
                </ul>
              </div>
              <div className="rounded-2xl border bg-white/70 p-4 text-sm text-muted-foreground">
                If you have diagnosed skin conditions or allergies, patch-test by wearing a freshly washed 
                item for a day before switching your whole wardrobe.
              </div>
            </div>
          </div>
        </motion.div>
      </section>*/}

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-14">
        <motion.div {...fadeUp} className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Common questions</h2>
            <p className="mt-2 text-muted-foreground">Everything you need to know about OXIA.</p>
          </div>

          <div className="grid gap-3">
            <FAQItem
              q="What makes OXIA different from regular detergent?"
              a="OXIA uses bio-enzymes (specifically proteases) to break down sweat proteins and odour compounds at the molecular level, rather than just masking them with heavy fragrance. It's also formulated to be gentle on sensitive skin with low-irritant surfactants."
            />
            <FAQItem
              q="Is it safe for sensitive skin?"
              a="Yes. OXIA is formulated with gentle alkyl glycoside surfactants and is dye-free. However, a small number of people may be sensitive to bio-enzymes or specific surfactants. We recommend patch-testing if you have known severe allergies or skin conditions."
            />
            <FAQItem
              q="Will it clean sweaty gym kit and work uniforms?"
              a="Absolutely. The bio-enzyme formula is specifically designed to target proteins, oils, and odour compounds found in sweat. It works on activewear, chef whites, healthcare scrubs, and any fabric that holds onto smells."
            />
            <FAQItem
              q="Can I use it on shoes and trainers?"
              a="Yes! Remove insoles and laces (if washable), put them in a wash bag, and wash on a short 30°C cycle. This tackles the source of shoe odour instead of just masking it with sprays."
            />
            <FAQItem
              q="Is it fragrance-free?"
              a="OXIA has a light, neutral scent—not fragrance-free, but not overpowering. If you need completely fragrance-free detergent, we recommend doing a small trial first and using an extra rinse cycle."
            />
            <FAQItem
              q="What if my skin still reacts?"
              a="Stop using immediately and return to your known-safe detergent. Contact us—we'll help troubleshoot dosage, extra rinse options, and check for cross-contamination from old residues in your machine."
            />
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/70">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-2xl border bg-white shadow-sm">
                <Droplets className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold">OXIA</div>
                <div className="text-xs text-muted-foreground">Sensitive Performance Wash</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Bio-enzyme detergent for people who train, work, and sweat—without the skin irritation.
            </p>
          </div>

          <div className="space-y-2 text-sm">
            <div className="font-medium">Contact</div>
            <div className="flex items-center gap-2 text-muted-foreground"><Mail className="h-4 w-4" /> info@oxiawash.co.uk</div>
            <div className="flex items-center gap-2 text-muted-foreground"><Phone className="h-4 w-4" /> +44 (0)7305 306016</div>
            <div className="flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4" /> United Kingdom</div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="font-medium">Learn more</div>
            <div className="space-y-1">
              <div><Link className="text-muted-foreground hover:text-foreground" href="/sensitive-skin">Sensitive skin</Link></div>
              <div><Link className="text-muted-foreground hover:text-foreground" href="/#pricing">Pricing</Link></div>
            </div>
            <div className="pt-2 flex gap-3 text-muted-foreground">
              <a className="hover:text-foreground" href="/privacy">Privacy</a>
              <a className="hover:text-foreground" href="/returns">Returns</a>
              <a className="hover:text-foreground" href="/terms">Terms</a>
            </div>
          </div>
        </div>
        <div className="border-t">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} OXIA</span>
            <span>Clean gear. Calm skin.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
