"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  AlertCircle,
  Droplets,
  Wind,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Baby,
  Users,
  Shirt,
  Star,
} from "lucide-react";

const HERO_ART = "/PINK1.webp";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5 },
};

function IconLine({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl border bg-white shadow-sm">
        <Icon className="h-5 w-5" />
      </div>
      <div className="space-y-0.5">
        <div className="font-medium">{title}</div>
        <div className="text-sm text-muted-foreground">{desc}</div>
      </div>
    </div>
  );
}

function TestimonialCarouselSingle() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const testimonials = [
    {
      quote: "If there were any irritants I'd usually get an outline of the clothes on my skin - but nothing.",
      name: "Iona",
      meta: "verified tester"
    },
    {
      quote: "Worked a treat on my bedsheets, not had any flare up on my skin at all, was a nice neutral smell to my sheets and brought them out nice and clean.",
      name: "Mark",
      meta: "verified tester"
    },
    {
      quote: "Very impressed on how they turned just very soft on the areas that i have dry skin. The socks worked well and the half tights that i wore feel so soft.",
      name: "Cain",
      meta: "verified tester"
    },
    {
      quote: "Had no skin issues when I wore the clothes yesterday. Honestly would be interested in buying once you launch.",
      name: "Dorian",
      meta: "verified tester"
    },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const current = testimonials[currentIndex];

  return (
    <div className="space-y-4">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border-2 border-rose-200 bg-rose-50/50 p-6 md:p-8 text-center"
      >
        <p className="text-lg font-medium">"{current.quote}"</p>
        <p className="text-sm text-muted-foreground mt-2">— {current.name}, {current.meta}</p>
      </motion.div>

      <div className="flex items-center justify-center gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === currentIndex
                ? "w-8 bg-foreground"
                : "w-2 bg-foreground/20 hover:bg-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function PainPoint({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border bg-white/80 p-5 shadow-sm space-y-2">
      <div className="flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-rose-500 mt-0.5" />
        <div>
          <div className="font-medium">{title}</div>
          <div className="text-sm text-muted-foreground">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function Testimonial({ name, meta, quote }: { name: string; meta: string; quote: string }) {
  return (
    <Card className="rounded-2xl h-full flex flex-col">
      <CardContent className="pt-6 flex-1 flex flex-col">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
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

export default function SensitiveSkinPage() {
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
        
        <div className="relative mx-auto max-w-6xl px-4 pt-8 pb-100 md:pb-23">
          <motion.div {...fadeUp} className="space-y-8">
            <div className="max-w-3xl mx-auto text-center space-y-5">
              <div className="flex flex-wrap gap-2 justify-center">
                {["Bio-enzyme powered", "Breaks down proteins", "Fresh when warm"].map((t) => (
                  <Badge key={t} variant="secondary" className="rounded-2xl bg-white/70">
                    {t}
                  </Badge>
                ))}
              </div>

            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Your skin shouldn't hurt from clean clothes.
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              If you've ever put on fresh laundry and felt that familiar itch, redness, or tightness—you're not alone. 
              Your skin is trying to tell you something: the detergent residue is still there.
            </p>

            <div className="rounded-2xl border-2 border-rose-300 bg-rose-50 p-6 max-w-2xl mx-auto">
              <p className="text-xl font-semibold text-center">
                Would you pay 21p to wear your favourite clothes without irritated skin?
              </p>
              <p className="text-sm text-muted-foreground text-center mt-2">
                Sound too good to be true? Give it a try.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center pt-2">
            <Button asChild size="lg" className="rounded-2xl shadow-sm">
              <a href="https://buy.stripe.com/5kQ28q98dbwP6ME1Bm7ss02" target="_blank" rel="noopener noreferrer">
                Request free sample
              </a>
            </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl bg-white/70">
                <a href="#how-it-helps">How OXIA helps</a>
              </Button>
            </div>
          </div>
        </motion.div>
        </div>
      </section>

      {/* Pain points - "You know this feeling" */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <motion.div {...fadeUp} className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">You know this feeling</h2>
            <p className="mt-2 text-muted-foreground">
              These are the everyday frustrations people with sensitive skin face—and shouldn't have to.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <PainPoint
              title="The outline effect"
              desc="You can literally see the shape of your clothes on your skin—red, itchy patches where fabric touched you."
            />
            <PainPoint
              title="Washing twice, still itchy"
              desc="You rinse and rinse, but the irritation doesn't go away. Because residue builds up in the fabric."
            />
            <PainPoint
              title="Can't wear what you want"
              desc="Base layers, gym gear, your favourite jumper—they all trigger reactions. So they sit in the drawer."
            />
            <PainPoint
              title="Your kids are suffering too"
              desc="Seeing your child scratch through the night because their bedsheets irritate them. Heartbreaking."
            />
          </div>

        <TestimonialCarouselSingle />
        </motion.div>
      </section>

      {/* The truth about "sensitive" detergent */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <motion.div {...fadeUp} className="space-y-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Why "sensitive skin" detergent still irritates you
            </h2>
            <p className="mt-3 text-muted-foreground">
              Most brands slap "gentle" or "sensitive" on the label and call it done. 
              But they're still leaving things behind that trigger reactions.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="rounded-2xl border-2">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-red-50 border border-red-200">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="font-semibold">What they don't tell you</div>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>• "Fragrance-free" doesn't mean residue-free</p>
                  <p>• Surfactants can cling to synthetic fabrics</p>
                  <p>• Optical brighteners stay in the weave</p>
                  <p>• Dyes can trigger contact dermatitis</p>
                  <p>• Buildup gets worse with every wash</p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-green-50 border border-green-200">
                    <ShieldCheck className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="font-semibold">What OXIA does differently</div>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>• <strong>Dye-free</strong> — colours won't fade, skin won't react</p>
                  <p>• <strong>Low-residue rinse</strong> — gentle surfactants wash clean</p>
                  <p>• <strong>No optical brighteners</strong> — nothing stays in the fabric</p>
                  <p>• <strong>Neutral scent</strong> — not fragrance-free, but not overpowering</p>
                  <p>• <strong>Bio-enzyme breakdown</strong> — proteins wash away completely</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* How it helps - Science made simple */}
      <section id="how-it-helps" className="mx-auto max-w-6xl px-4 py-14">
        <motion.div {...fadeUp} className="space-y-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Clean clothes. No residue. No reaction.
            </h2>
            <p className="mt-3 text-muted-foreground">
              OXIA is formulated to rinse clean—leaving your clothes fresh and your skin calm.
            </p>
          </div>

          <div className="rounded-2xl border bg-white/70 p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              <IconLine
                icon={Droplets}
                title="Gentle surfactants"
                desc="Alkyl glycosides clean effectively without harsh chemicals that irritate skin"
              />
              <IconLine
                icon={Wind}
                title="Low-residue formula"
                desc="Rinses completely clean—no buildup that can trigger reactions over time"
              />
              <IconLine
                icon={Heart}
                title="Dye-free & gentle"
                desc="No dyes, no optical brighteners—just clean clothes that won't hurt"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="rounded-2xl bg-white/80 shadow-sm">
              <CardContent className="pt-6 space-y-3">
                <div className="text-sm font-medium text-muted-foreground">Perfect for</div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" />
                    <span>Eczema and dermatitis sufferers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" />
                    <span>People with allergic contact dermatitis</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" />
                    <span>Parents washing baby clothes & bedding</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" />
                    <span>Healthcare workers washing scrubs daily</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" />
                    <span>Anyone who gets "the outline effect"</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl bg-white/80 shadow-sm">
              <CardContent className="pt-6 space-y-3">
                <div className="text-sm font-medium text-muted-foreground">Best practices</div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" />
                    <span>Use 30g per wash (don't overdose)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" />
                    <span>Add an extra rinse for base layers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" />
                    <span>Avoid fabric softener on technical fabrics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" />
                    <span>Wash machine monthly to remove old buildup</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" />
                    <span>Patch-test: wear one item for 24h first</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Real stories */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <motion.div {...fadeUp} className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Relief people actually feel</h2>
            <p className="mt-2 text-muted-foreground">From people who've been where you are.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Testimonial
              name="Mark"
              meta="Bedsheet flare-ups"
              quote="Worked a treat on my bedsheets, not had any flare up on my skin at all, was a nice neutral smell to my sheets and brought them out nice and clean."
            />
            <Testimonial
              name="Cain"
              meta="Dry skin relief"
              quote="Very impressed on how they turned just very soft on the areas that i have dry skin. The socks worked well and the half tights that i wore feel so soft."
            />
            <Testimonial
              name="Dorian"
              meta="Heat training athlete"
              quote="Had no skin issues when I wore the clothes yesterday. Honestly would be interested in buying once you launch."
            />
          </div>
        </motion.div>
      </section>

      {/* Try it first */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <motion.div {...fadeUp} className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Test it on your skin first
            </h2>
            <p className="text-muted-foreground">
              If you've been burned by "gentle" detergents before, we get it. That's why we offer free samples.
            </p>
            <p className="text-muted-foreground">
              60g = 2 washes. Enough to see if your skin stays calm. No strings attached.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-2xl shadow-sm">
                <a href="https://buy.stripe.com/5kQ28q98dbwP6ME1Bm7ss02" target="_blank" rel="noopener noreferrer">
                  Request free sample
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-2xl bg-white/70">
                <Link href="/#pricing">See all pricing options</Link>
              </Button>
            </div>
          </div>

          <Card className="rounded-3xl bg-white/80 shadow-sm">
            <CardContent className="p-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border bg-white shadow-sm">
                  <Baby className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold">How to patch-test</div>
                  <div className="text-sm text-muted-foreground">Be safe, not sorry</div>
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex gap-2">
                  <span className="font-medium text-foreground">1)</span>
                  Wash a single item (t-shirt or pillowcase)
                </div>
                <div className="flex gap-2">
                  <span className="font-medium text-foreground">2)</span>
                  Wear it or sleep on it for 24 hours
                </div>
                <div className="flex gap-2">
                  <span className="font-medium text-foreground">3)</span>
                  Check for redness, itching, or irritation
                </div>
                <div className="flex gap-2">
                  <span className="font-medium text-foreground">4)</span>
                  If all clear, switch your full wardrobe
                </div>
              </div>

              <div className="rounded-2xl border bg-rose-50/50 p-4 text-sm text-muted-foreground">
                If you have diagnosed conditions or severe allergies, always patch-test. 
                A small number of people may react to bio-enzymes or specific surfactants.
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Footer CTA */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <motion.div {...fadeUp} className="rounded-[28px] border bg-gradient-to-br from-rose-50 to-white p-8 md:p-12 text-center space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Your skin deserves better than "good enough"
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Clean clothes shouldn't come with consequences. Try OXIA—formulated for people who've been let down 
            by every other "sensitive skin" detergent.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" className="rounded-2xl shadow-sm">
              <a href="https://buy.stripe.com/5kQ28q98dbwP6ME1Bm7ss02" target="_blank" rel="noopener noreferrer">
                Request free sample
              </a>
            </Button>
          <Button asChild size="lg" variant="outline" className="rounded-2xl bg-white/70">
            <Link href="/#pricing">See all pricing options</Link>
          </Button>
          </div>
        </motion.div>
      </section>

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
            <div className="flex items-center gap-2 text-muted-foreground"><Mail className="h-4 w-4" /> support@oxiawash.co.uk</div>
            <div className="flex items-center gap-2 text-muted-foreground"><Phone className="h-4 w-4" /> +44 (0)7xxx xxxxxx</div>
            <div className="flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4" /> United Kingdom</div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="font-medium">Learn more</div>
            <div className="space-y-1">
              <div><Link className="text-muted-foreground hover:text-foreground" href="/sensitive-skin">Sensitive skin</Link></div>
              <div><Link className="text-muted-foreground hover:text-foreground" href="/odour">Odor removal</Link></div>
              <div><Link className="text-muted-foreground hover:text-foreground" href="/how-to-use">How to use</Link></div>
            </div>
            <div className="pt-2 flex gap-3 text-muted-foreground">
              <a className="hover:text-foreground" href="#">Privacy</a>
              <a className="hover:text-foreground" href="#">Returns</a>
              <a className="hover:text-foreground" href="#">Terms</a>
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
