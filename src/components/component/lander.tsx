
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

export function Lander() {
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="#" className="flex items-center" prefetch={false}>
            <img src="/placeholder.svg" className="mt-20" width={150} height={40} alt="Personal Injury Law Firm" />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
              Expertise
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
              Location
            </Link>
            <Link
              href="#"
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
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </header>
      <main className="flex-1">
        <section className="pt-20 md:pt-24 lg:pt-32">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Trusted Personal Injury Lawyers</h1>
                <p className="mt-4 text-muted-foreground">
                  Our experienced team of personal injury attorneys is dedicated to helping you get the compensation you
                  deserve. Well fight tirelessly to protect your rights and ensure you receive the justice youre
                  entitled to.
                </p>
                <div className="mt-6 flex items-center space-x-4">
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground font-medium shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
                    prefetch={false}
                  >
                    Schedule Consultation
                  </Link>
                  <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
                    Learn More
                  </Link>
                </div>
              </div>
              <div>
                <Carousel className="rounded-xl overflow-hidden">
                  <CarouselContent>
                    <CarouselItem>
                      <img
                        src="/placeholder.svg"
                        width={800}
                        height={500}
                        alt="Personal Injury Accident"
                        className="w-full h-auto object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
                        src="/placeholder.svg"
                        width={800}
                        height={500}
                        alt="Car Accident"
                        className="w-full h-auto object-cover"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <img
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
              <div className="bg-background rounded-lg shadow-md p-6 hover:bg-accent hover:text-accent-foreground transition-colors">
                <CarIcon className="h-10 w-10 text-primary" />
                <h3 className="mt-4 text-xl font-bold">Car Accidents</h3>
                <p className="mt-2 text-muted-foreground">
                  We handle all types of car accident cases, including collisions, rollovers, and hit-and-run incidents.
                </p>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6 hover:bg-accent hover:text-accent-foreground transition-colors">
                <BriefcaseIcon className="h-10 w-10 text-primary" />
                <h3 className="mt-4 text-xl font-bold">Workplace Injuries</h3>
                <p className="mt-2 text-muted-foreground">
                  Our team specializes in workers' compensation claims and other workplace injury cases.
                </p>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6 hover:bg-accent hover:text-accent-foreground transition-colors">
                <HospitalIcon className="h-10 w-10 text-primary" />
                <h3 className="mt-4 text-xl font-bold">Medical Malpractice</h3>
                <p className="mt-2 text-muted-foreground">
                  We represent clients in cases involving medical negligence, surgical errors, and other
                  healthcare-related injuries.
                </p>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6 hover:bg-accent hover:text-accent-foreground transition-colors">
                <BikeIcon className="h-10 w-10 text-primary" />
                <h3 className="mt-4 text-xl font-bold">Bicycle Accidents</h3>
                <p className="mt-2 text-muted-foreground">
                  Our firm has extensive experience handling cases involving bicycle collisions and injuries.
                </p>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6 hover:bg-accent hover:text-accent-foreground transition-colors">
                <TruckIcon className="h-10 w-10 text-primary" />
                <h3 className="mt-4 text-xl font-bold">Truck Accidents</h3>
                <p className="mt-2 text-muted-foreground">
                  We understand the complexities of truck accident cases and work tirelessly to secure the compensation
                  you deserve.
                </p>
              </div>
              <div className="bg-background rounded-lg shadow-md p-6 hover:bg-accent hover:text-accent-foreground transition-colors">
                <FileSlidersIcon className="h-10 w-10 text-primary" />
                <h3 className="mt-4 text-xl font-bold">Slip and Fall</h3>
                <p className="mt-2 text-muted-foreground">
                  Our team has extensive experience handling slip and fall cases, ensuring you receive the justice you
                  deserve.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="location" className="py-12 md:py-16 lg:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Visit Our Office</h2>
                <p className="mt-4 text-muted-foreground">
                  Our personal injury law firm is located in the heart of the city, providing convenient access for
                  clients throughout the region.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center space-x-4">
                    <MapPinIcon className="h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-medium">Address</h4>
                      <p className="text-muted-foreground">
                        123 Main Street, Suite 456
                        <br />
                        Anytown, USA 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <ClockIcon className="h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-medium">Business Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <PhoneIcon className="h-6 w-6 text-primary" />
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-muted-foreground">(123) 456-7890</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/placeholder.svg"
                  width={800}
                  height={500}
                  alt="Law Firm Office"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="consultation"
          className="py-12 md:py-16 lg:py-24 bg-muted bg-[url('/consultation-bg.jpg')] bg-cover bg-center bg-no-repeat"
        >
          <div className="container">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Schedule a Consultation</h2>
              <p className="text-muted-foreground">
                Take the first step towards getting the compensation you deserve. Schedule a free consultation with our
                experienced personal injury attorneys today.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground font-medium shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
                prefetch={false}
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 border-t">
        <div className="container flex items-center justify-between">
          <p className="text-sm text-muted-foreground">&copy; 2024 Personal Injury Law Firm. All rights reserved.</p>
          <nav className="flex items-center space-x-4">
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors" prefetch={false}>
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function BikeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18.5" cy="17.5" r="3.5" />
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="15" cy="5" r="1" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </svg>
  )
}


function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function CarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  )
}


function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function FileSlidersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M8 12h8" />
      <path d="M10 11v2" />
      <path d="M8 17h8" />
      <path d="M14 16v2" />
    </svg>
  )
}


function HospitalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 6v4" />
      <path d="M14 14h-4" />
      <path d="M14 18h-4" />
      <path d="M14 8h-4" />
      <path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
      <path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
    </svg>
  )
}


function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function TruckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
