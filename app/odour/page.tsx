"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Flame,
  Droplets,
  Mail,
  Phone,
  MapPin,
  Wind,
  Shirt,
  Sparkles,
  Timer,
  CheckCircle2,
  AlertCircle,
  Zap,
  TrendingDown,
  Star,
  ShieldOff,
  ThumbsDown,
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
      quote: "I Washed some clothes I use for heat training - so the sweatiest clothes possible. I'm really impressed with how it pretty much completely neutralized all odours. Have used sport specific detergents in the past and they've not been this good.",
      name: "Dorian",
      meta: "Heat training"
    },
    {
      quote: "40 degrees on 2 pairs of trainers and both were certainly kinder of the nasal passage.",
      name: "Barry",
      meta: "Trainer Washer"
    },
    {
      quote: "One of her cotton jumpers had an awful smell. One wash… gone.",
      name: "Lynsey",
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

function PainPoint({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border bg-white/80 p-5 shadow-sm space-y-2">
      <div className="flex items-start gap-3">
        <Icon className="h-5 w-5 text-rose-500 mt-0.5" />
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

export default function OdourPage() {
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
        
        <div className="relative mx-auto max-w-6xl px-4 pt-8 pb-50 md:pb-44">
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
                "Do I smell?"
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                That constant second-guessing. The phantom sniff-check. The silent fear in meetings, at the gym, 
                on dates. Your clothes smell fine out the wash—then you warm up and it's back.
              </p>

              <div className="rounded-2xl border-2 border-rose-300 bg-rose-50 p-6 max-w-2xl mx-auto">
                <p className="text-xl font-semibold text-center">
                  Clean isn't clean if it still smells.
                </p>
                <p className="text-sm text-muted-foreground text-center mt-2">
                  OXIA eliminates odours at the source—not masks them with fragrance.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center pt-2">
              <Button asChild size="lg" className="rounded-2xl shadow-sm">
                <a href="https://buy.stripe.com/5kQ28q98dbwP6ME1Bm7ss02" target="_blank" rel="noopener noreferrer">
                  Try OXIA
                </a>
              </Button>
                <Button asChild size="lg" variant="outline" className="rounded-2xl bg-white/70">
                  <a href="#how-it-works">How it works</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The real cost of smelly clothes */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <motion.div {...fadeUp} className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              It's not just annoying—it's expensive
            </h2>
            <p className="mt-2 text-muted-foreground">
              Persistent odours cost you more than you think.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <PainPoint
              icon={ThumbsDown}
              title="Loss of confidence"
              desc="Constant second-guessing. Do I smell? Are people keeping distance?"
            />
            <PainPoint
              icon={TrendingDown}
              title="Wasting money"
              desc="Re-washing loads. Hot washes as a last resort. Binning expensive kit early."
            />
            <PainPoint
              icon={Shirt}
              title="Ruined clothes"
              desc="Over-washing breaks down fabrics. Your £60 gym top lasts 6 months, not 3 years."
            />
            <PainPoint
              icon={ShieldOff}
              title="Skin problems"
              desc="Bacteria build-up in fabric causes rashes, breakouts, and irritation."
            />
          </div>

        <TestimonialCarouselSingle />
        </motion.div>
      </section>

      {/* Why it keeps happening */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <motion.div {...fadeUp} className="space-y-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Why your clothes still smell after washing
            </h2>
            <p className="mt-3 text-muted-foreground">
              It's not your fault. Standard detergents aren't built for this.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="rounded-2xl border-2">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-red-50 border border-red-200">
                    <AlertCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="font-semibold">What's actually happening</div>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>• <strong>Sweat proteins stick to synthetic fabrics</strong> — polyester is the worst</p>
                  <p>• <strong>Bacteria feed on the residue</strong> and create biofilm</p>
                  <p>• <strong>Heat reactivates the smell</strong> when you move or sweat again</p>
                  <p>• <strong>Masking with fragrance</strong> just covers it temporarily</p>
                  <p>• <strong>The smell comes back</strong>, often worse than before</p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-2">
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-green-50 border border-green-200">
                    <Sparkles className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="font-semibold">How OXIA fixes it</div>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p>• <strong>Bio-enzymes (proteases)</strong> break down sweat proteins</p>
                  <p>• <strong>Eliminates odour compounds</strong> instead of masking them</p>
                  <p>• <strong>Works on synthetic fabrics</strong> — activewear, base layers, chef whites</p>
                  <p>• <strong>Stays fresh when you warm up</strong> — no smell return</p>
                  <p>• <strong>Light, neutral scent</strong> — not heavy perfume</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* How it works - Science */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-14">
        <motion.div {...fadeUp} className="space-y-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Bio-enzymes: the science bit
            </h2>
            <p className="mt-3 text-muted-foreground">
              This isn't magic. It's molecular breakdown.
            </p>
          </div>

          <div className="rounded-2xl border bg-white/70 p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-3">
              <IconLine
                icon={Droplets}
                title="Proteases (5%)"
                desc="Bio-enzymes that specifically target and break down sweat proteins"
              />
              <IconLine
                icon={Zap}
                title="Odour elimination"
                desc="Destroys odour compounds at the molecular level—doesn't mask them"
              />
              <IconLine
                icon={Wind}
                title="Rinses clean"
                desc="Gentle surfactants wash away completely—no buildup, no residue"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="rounded-2xl bg-white/80 shadow-sm">
              <CardContent className="pt-6 space-y-3">
                <div className="text-sm font-medium text-muted-foreground">Built for</div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" />
                    <span>Gym kit & activewear</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" />
                    <span>Chef whites & kitchen uniforms</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" />
                    <span>Work boots & trainers (insoles + laces)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" />
                    <span>Base layers & compression gear</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl bg-white/80 shadow-sm">
              <CardContent className="pt-6 space-y-3">
                <div className="text-sm font-medium text-muted-foreground">Works on</div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" />
                    <span>Synthetic fabrics (polyester, nylon)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" />
                    <span>Cotton & natural fibres</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" />
                    <span>Technical performance fabrics</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" />
                    <span>30°C or 40°C washes</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl bg-white/80 shadow-sm">
              <CardContent className="pt-6 space-y-3">
                <div className="text-sm font-medium text-muted-foreground">How to use</div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" />
                    <span>Use 30g per wash (don't overdo it)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" />
                    <span>Works on short cycles</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" />
                    <span>Effective at lower temperatures</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5" />
                    <span>Air dry for best results</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>

      {/* Shoes section */}
      <section className="mx-auto max-w-6xl px-4 py-14 bg-rose-50/30 -mx-4">
        <motion.div {...fadeUp} className="max-w-6xl mx-auto px-4 space-y-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Shoes don't stink. Insoles do.
              </h2>
              <p className="text-muted-foreground">
                Spraying them is just perfume on top of bacteria. Wash the parts that hold the odour.
              </p>

              <div className="rounded-2xl border bg-white/80 p-5 shadow-sm space-y-3">
                <div className="font-medium">How to wash trainers properly</div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex gap-2">
                    <span className="font-medium text-foreground">1)</span>
                    Remove insoles + laces (if washable)
                  </div>
                  <div className="flex gap-2">
                    <span className="font-medium text-foreground">2)</span>
                    Put in a wash bag or pillowcase
                  </div>
                  <div className="flex gap-2">
                    <span className="font-medium text-foreground">3)</span>
                    Wash on a short cycle at 30°C
                  </div>
                  <div className="flex gap-2">
                    <span className="font-medium text-foreground">4)</span>
                    Air dry completely before reassembling
                  </div>
                </div>
              </div>

              <div className="text-sm text-muted-foreground">
                <strong>Works on:</strong> Trainers, gym shoes, work boots, insoles, laces
              </div>
            </div>

            <div className="space-y-4">
              <Card className="rounded-2xl bg-white shadow-sm">
                <CardContent className="pt-6 space-y-4">
                  <div className="font-semibold">Why it works</div>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>Most shoe odour lives in the insoles and laces—not the shoe itself.</p>
                    <p>Bio-enzymes break down the sweat proteins and bacteria causing the smell.</p>
                    <p>You're treating the source, not masking it with deodorant spray.</p>
                  </div>
                </CardContent>
              </Card>

              <div className="rounded-2xl border-2 border-rose-200 bg-white p-5">
                <p className="text-sm">
                  <strong className="text-foreground">"40 degrees on 2 pairs of trainers and both were 
                  certainly kinder of the nasal passage."</strong>
                </p>
                <p className="text-sm text-muted-foreground mt-2">— Barry</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <motion.div {...fadeUp} className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Fresh when dry. Fresh when warm.</h2>
            <p className="mt-2 text-muted-foreground">The win isn't just "smells okay out the wash"—it's that it doesn't come back.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Testimonial
              name="Dorian"
              meta="Heat training"
              quote="Washed some clothes I use for heat training - so the sweatiest clothes possible. I'm really impressed with how it pretty much completely neutralized all odours. Have used sport specific detergents in the past and they've not been this good."
            />
            <Testimonial
              name="Lynsey"
              meta="Stubborn smells"
              quote="One of her cotton jumpers had an awful smell. One wash… gone."
            />
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <motion.div {...fadeUp} className="rounded-[28px] border bg-gradient-to-br from-rose-50 to-white p-8 md:p-12 text-center space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Stop the re-stink
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Wash your kit properly—without cover-ups, without rewashing, without second-guessing yourself.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button asChild size="lg" variant="outline" className="rounded-2xl bg-white/70">
              <Link href="/#pricing">Choose your bag</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-2xl bg-white">
              <Link href="/sensitive-skin">Prefer sensitive-skin messaging?</Link>
            </Button>
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
            <div className="flex items-center gap-2 text-muted-foreground"><Mail className="h-4 w-4" /> support@oxiawash.co.uk</div>
            <div className="flex items-center gap-2 text-muted-foreground"><Phone className="h-4 w-4" /> +44 (0)7xxx xxxxxx</div>
            <div className="flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4" /> United Kingdom</div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="font-medium">Learn more</div>
            <div className="space-y-1">
              <div><Link className="text-muted-foreground hover:text-foreground" href="/sensitive-skin">Sensitive skin</Link></div>
              <div><Link className="text-muted-foreground hover:text-foreground" href="/odour">Odour removal</Link></div>
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