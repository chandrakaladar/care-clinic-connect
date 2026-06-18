import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const posts = [
  {
    slug: "best-exercises-for-back-pain",
    title: "Best Exercises for Back Pain Relief",
    excerpt: "Suffering from lower back pain? Discover the top physiotherapist-recommended exercises you can do at home to strengthen your back and reduce pain naturally.",
    date: "March 15, 2026",
    category: "Pain Relief",
    readTime: "5 min read",
  },
  {
    slug: "how-physiotherapy-helps-knee-pain",
    title: "How Physiotherapy Helps Knee Pain",
    excerpt: "Knee pain doesn't always require surgery. Learn how physiotherapy techniques like manual therapy, strengthening exercises, and electrotherapy can restore your knee health.",
    date: "March 8, 2026",
    category: "Knee Health",
    readTime: "4 min read",
  },
  {
    slug: "post-surgery-rehabilitation-tips",
    title: "Post-Surgery Rehabilitation: Essential Tips for a Faster Recovery",
    excerpt: "Had a knee replacement or spinal surgery? Here are evidence-based rehabilitation tips from our Guntur physiotherapy experts to speed up your recovery safely.",
    date: "February 28, 2026",
    category: "Recovery",
    readTime: "6 min read",
  },
  {
    slug: "when-should-you-see-a-physiotherapist",
    title: "When Should You See a Physiotherapist?",
    excerpt: "Many people delay physiotherapy until pain becomes unbearable. Learn the early warning signs that indicate it's time to visit a physiotherapist in Guntur.",
    date: "February 20, 2026",
    category: "Wellness",
    readTime: "4 min read",
  },
];

const BlogPage = () => (
  <>
    <SEOHead
      title="Blog | Physiotherapy Tips & Recovery Guides"
      description="Expert physiotherapy articles, pain relief tips, and recovery guides from We Care Physiotherapy Clinic in Guntur."
      canonical="/blog"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "We Care Physiotherapy Blog",
        description:
          "Expert physiotherapy articles, pain relief tips and recovery guides from We Care Physiotherapy Clinic in Guntur.",
        blogPost: posts.map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          description: p.excerpt,
          datePublished: p.date,
          url: `/blog/${p.slug}`,
          author: {
            "@type": "Organization",
            name: "We Care Physiotherapy & Chiropractic Clinic",
          },
        })),
      }}
    />
    <section className="bg-surface-warm py-16 md:py-24">
      <div className="container max-w-4xl">
        <ScrollReveal className="mb-14">
          <p className="text-primary font-semibold text-sm tracking-wide uppercase mb-3">Our Blog</p>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-foreground leading-tight mb-4">
            Health Tips & Recovery Guides
          </h1>
          <p className="text-muted-foreground text-lg">
            Expert insights from our Guntur physiotherapy team to help you stay active, recover faster, and live pain-free.
          </p>
        </ScrollReveal>

        <div className="space-y-6">
          {posts.map((post, i) => (
            <ScrollReveal key={post.slug} delay={i * 0.06}>
              <article className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 group hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <span className="bg-teal-soft text-primary px-2.5 py-1 rounded-full font-medium">{post.category}</span>
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="font-display font-bold text-xl md:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-primary font-medium text-sm hover:gap-3 transition-all duration-200"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default BlogPage;
