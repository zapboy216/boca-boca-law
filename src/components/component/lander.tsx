import Link from "next/link";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import 'animate.css';

export function Lander() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="#home" className="flex items-center" prefetch={false}>
            <Image src="/placeholder.svg" className="mt-20" width={150} height={40} alt="Personal Injury Law Firm" />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
              Home
            </Link>
            <Link href="#expertise" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
              Expertise
            </Link>
            <Link href="#location" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
              Location
            </Link>
            <Link
              href="#consultation"
              className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-primary text-primary-foreground font-medium shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
              prefetch={false}
            >
              Schedule Consultation
            </Link>
          </nav>
          <button
            className="md:hidden p-2 rounded-md hover:bg-muted transition-colors"
            aria-label="Toggle navigation menu"
          >
          </button>
        </div>
      </header>
      <main className="flex-1">
        <section id="home" className="pt-20 md:pt-24 lg:pt-32 animate__animated animate__fadeIn">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Trusted Personal Injury Lawyers</h1>
                <p className="mt-4 text-muted-foreground">
                  Our experienced team of personal injury attorneys is dedicated to helping you get the compensation you
                  deserve. We'll fight tirelessly to protect your rights and ensure you receive the justice you're
                  entitled to.
                </p>
                <div className="mt-6 flex items-center space-x-4">
                  <Link
                    href="#consultation"
                    className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground font-medium shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
                    prefetch={false}
                  >
                    Schedule Consultation
                  </Link>
                  <Link href="#learn-more" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
                    Learn More
                  </Link>
                </div>
              </div>
              <div>
                <Carousel className="rounded-xl overflow-hidden">
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src="/placeholder.svg"
                        width={800}
                        height={500}
                        alt="Personal Injury Accident"
                        className="w-full h-auto object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="/placeholder.svg"
                        width={800}
                        height={500}
                        alt="Car Accident"
                        className="w-full h-auto object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="/placeholder.svg"
                        width={800}
                        height={500}
                        alt="Workplace Injury"
                        className="w-full h-auto object-cover"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </div>
        </section>
        <section id="expertise" className="mt-20 py-12 md:py-16 lg:py-24 bg-muted">
          <div className="container">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Areas of Expertise</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground">
                Our personal injury law firm specializes in a wide range of practice areas, ensuring we can provide
                comprehensive representation for your case.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg shadow-md p-6 hover:bg-accent hover:text-accent-foreground transition-colors animate__animated animate__fadeIn">
                <h3 className="mt-4 text-xl font-bold">Car Accidents</h3>
                <p className="mt-2 text-muted-foreground">
                  We handle all types of car accident cases, including collisions, rollovers, and hit-and-run incidents.
                </p>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6 hover:bg-accent hover:text-accent-foreground transition-colors animate__animated animate__fadeIn">
                <h3 className="mt-4 text-xl font-bold">Workplace Injuries</h3>
                <p className="mt-2 text-muted-foreground">
                  Our team specializes in workers compensation claims and other workplace injury cases.
                </p>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6 hover:bg-accent hover:text-accent-foreground transition-colors animate__animated animate__fadeIn">
                <h3 className="mt-4 text-xl font-bold">Medical Malpractice</h3>
                <p className="mt-2 text-muted-foreground">
                  We represent clients in cases involving medical negligence, surgical errors, and other
                  healthcare-related injuries.
                </p>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6 hover:bg-accent hover:text-accent-foreground transition-colors animate__animated animate__fadeIn">
                <h3 className="mt-4 text-xl font-bold">Bicycle Accidents</h3>
                <p className="mt-2 text-muted-foreground">
                  Our firm has extensive experience handling cases involving bicycle collisions and injuries.
                </p>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6 hover:bg-accent hover:text-accent-foreground transition-colors animate__animated animate__fadeIn">
                <h3 className="mt-4 text-xl font-bold">Truck Accidents</h3>
                <p className="mt-2 text-muted-foreground">
                  We understand the complexities of truck accident cases and work tirelessly to secure the compensation
                  you deserve.
                </p>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6 hover:bg-accent hover:text-accent-foreground transition-colors animate__animated animate__fadeIn">
                <h3 className="mt-4 text-xl font-bold">Slip and Fall</h3>
                <p className="mt-2 text-muted-foreground">
                  Our team has extensive experience handling slip and fall cases, ensuring you receive the justice you
                  deserve.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="reviews" className="py-12 md:py-16 lg:py-24 bg-background">
          <div className="container">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Customer Reviews</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground">
                Hear what our clients have to say about our exceptional legal services.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-muted rounded-lg shadow-md p-6 transition-colors animate__animated animate__fadeIn">
                <p className="text-muted-foreground">"Boca Boca Law Firm handled my case with utmost professionalism. I got the compensation I deserved!"</p>
                <p className="mt-4 font-medium">- John Doe</p>
              </div>
              <div className="bg-muted rounded-lg shadow-md p-6 transition-colors animate__animated animate__fadeIn">
                <p className="text-muted-foreground">"The team at Boca Boca Law is simply the best. They were supportive and knowledgeable throughout."</p>
                <p className="mt-4 font-medium">- Jane Smith</p>
              </div>
              <div className="bg-muted rounded-lg shadow-md p-6 transition-colors animate__animated animate__fadeIn">
                <p className="text-muted-foreground">"I highly recommend Boca Boca Law Firm for their excellent legal services and compassionate approach."</p>
                <p className="mt-4 font-medium">- Mary Johnson</p>
              </div>
            </div>
          </div>
        </section>
        <section id="consultation" className="py-12 md:py-16 lg:py-24 bg-gradient-to-b from-red-500 to-black text-black bg-opacity-75">
  <div className="container">
    <div className="max-w-2xl mx-auto text-center space-y-4">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Schedule a Consultation</h2>
      <p className="text-white text-lg opacity-90">
        Take the first step towards getting the compensation you deserve. Schedule a free consultation with our
        experienced personal injury attorneys today.
      </p>
      <Link
        href="#contact-us"
        className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground font-medium shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
        prefetch={false}
      >
        Schedule Consultation
      </Link>
    </div>
  </div>
</section>

        <section id="contact-us" className="py-12 md:py-16 lg:py-24 bg-background">
          <div className="container">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground">
                Fill out the form below to get in touch with us. We're here to help you with your personal injury case.
              </p>
            </div>
            <form className="mt-10 max-w-2xl mx-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-2 rounded-md border border-muted-foreground focus:ring-primary focus:border-primary"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 rounded-md border border-muted-foreground focus:ring-primary focus:border-primary"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-md border border-muted-foreground focus:ring-primary focus:border-primary"
              />
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded-md border border-muted-foreground focus:ring-primary focus:border-primary"
                rows="6"
              ></textarea>
              <button
                type="submit"
                className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground font-medium shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-12 border-t">
        <div className="container flex flex-col items-center space-y-4">
          <p className="text-sm text-muted-foreground">&copy; 2024 Boca Boca Law Firm. All rights reserved.</p>
          <nav className="flex items-center space-x-4">
            <Link href="#privacy-policy" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#terms-of-service" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
              Terms of Service
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground">123 Main Street, Suite 456, Anytown, USA 12345</p>
          <p className="text-sm text-muted-foreground">(123) 456-7890</p>
        </div>
      </footer>
    </div>
  );
}
