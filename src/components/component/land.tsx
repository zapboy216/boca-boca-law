import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { useTranslations } from 'next-intl'
import 'animate.css'

export function Land() {
  const t = useTranslations('Land')

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent text-black">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="#hero" className="flex items-center" prefetch={false}>
            <MountainIcon className="h-8 w-8" />
            <span className="ml-3 text-xl font-bold">{t('title')}</span>
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="#hero" className="hover:underline" prefetch={false}>
              {t('nav_one')}
            </Link>
            <Link href="#work" className="hover:underline" prefetch={false}>
              {t('nav_two')}
            </Link>
            <Link href="#about" className="hover:underline" prefetch={false}>
              {t('nav_three')}
            </Link>
            <Link href="#contact" className="hover:underline" prefetch={false}>
              {t('nav_four')}
            </Link>
          </nav>
          <Button className="border-gray-300 shadow-lg">{t('quote_button')}</Button>
        </div>
      </header>


      
      <section id="hero" className="mt-16 bg-gradient-to-r from-red-600 via-red-800 to-black py-24 md:py-32">
        <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 md:flex-row md:px-6">
          <div className="max-w-2xl text-center md:text-left animate__animated animate__fadeInUp animate__faster">
            <h1 className="text-5xl font-bold tracking-tight text-primary-foreground sm:text-6xl md:text-7xl">
              {t('heading_one')}
            </h1>
            <p className="mt-4 text-lg text-primary-foreground">
              {t('paragraph_one')}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button className="border-gray-300 shadow-lg">{t('button_one')}</Button>
              <Button variant="secondary" className="border-gray-300 shadow-lg">{t('button_two')}</Button>
            </div>
          </div>
          <Carousel className="w-full max-w-xl animate__animated animate__fadeIn">
            <CarouselContent>
              <CarouselItem>
                <Image src={t('image_one')} width={600} height={400} alt="Hero Image 1" className="rounded-lg shadow-xl" />
              </CarouselItem>
              <CarouselItem>
                <Image src={t('image_two')} width={600} height={400} alt="Hero Image 2" className="rounded-lg shadow-xl" />
              </CarouselItem>
              <CarouselItem>
                <Image src={t('image_three')} width={600} height={400} alt="Hero Image 3" className="rounded-lg shadow-xl" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      <section id="work" className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center animate__animated animate__fadeInUp animate__faster">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{t('heading_two')}</h2>
            <p className="mt-4 text-muted-foreground">{t('paragraph_two')}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <Card className="animate__animated animate__fadeIn">
              <CardContent>
                <Image src={t('image_four')} width={400} height={300} alt="Project 1" className="rounded-lg shadow-xl" />
                <div className="mt-4">
                  <h3 className="text-lg font-bold">{t('heading_three')}</h3>
                  <p className="mt-2 text-muted-foreground">{t('paragraph_three')}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="animate__animated animate__fadeIn">
              <CardContent>
                <Image src={t('image_five')} width={400} height={300} alt="Project 2" className="rounded-lg shadow-xl" />
                <div className="mt-4">
                  <h3 className="text-lg font-bold">{t('heading_four')}</h3>
                  <p className="mt-2 text-muted-foreground">{t('paragraph_four')}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="animate__animated animate__fadeIn">
              <CardContent>
                <Image src={t('image_six')} width={400} height={300} alt="Project 3" className="rounded-lg shadow-xl" />
                <div className="mt-4">
                  <h3 className="text-lg font-bold">{t('heading_five')}</h3>
                  <p className="mt-2 text-muted-foreground">{t('paragraph_five')}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="bg-muted py-20 md:py-28">
        <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 md:flex-row md:px-6">
          <div className="max-w-2xl text-center md:text-left animate__animated animate__fadeInUp animate__faster">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{t('heading_six')}</h2>
            <p className="mt-4 text-muted-foreground">
              {t('paragraph_six')}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button className="border-gray-300 shadow-lg">{t('button_three')}</Button>
            <Button variant="secondary" className="border-gray-300 shadow-lg">{t('button_four')}</Button>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center animate__animated animate__fadeInUp animate__faster">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{t('heading_seven')}</h2>
            <p className="mt-4 text-muted-foreground">{t('paragraph_seven')}</p>
          </div>
          <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
              src={t('videoUrl')}
              title="Video Presentation"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
      <section className="bg-muted py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center animate__animated animate__fadeInUp animate__faster">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{t('heading_eight')}</h2>
            <p className="mt-4 text-muted-foreground">{t('paragraph_eight')}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <Card className="animate__animated animate__fadeIn">
              <CardContent>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{t('heading_nine')}</h3>
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    {t('cta')}
                  </span>
                </div>
                <p className="mt-2 text-muted-foreground">{t('paragraph_nine')}</p>
              </CardContent>
            </Card>
            <Card className="animate__animated animate__fadeIn">
              <CardContent>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{t('heading_ten')}</h3>
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    {t('cta')}
                  </span>
                </div>
                <p className="mt-2 text-muted-foreground">{t('paragraph_ten')}</p>
              </CardContent>
            </Card>
            <Card className="animate__animated animate__fadeIn">
              <CardContent>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">{t('heading_eleven')}</h3>
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Coming Soon
                  </span>
                </div>
                <p className="mt-2 text-muted-foreground">{t('paragraph_eleven')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section id="about" className="py-20 md:py-28">
        <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 md:flex-row md:px-6">
          <div className="max-w-2xl text-center md:text-left animate__animated animate__fadeInUp animate__faster">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">{t('heading_twelve')}</h2>
            <p className="mt-4 text-muted-foreground">
              {t('paragraph_twelve')}
            </p>
            <p className="mt-4 text-muted-foreground">
              {t('paragraph_thirteen')}
            </p>
          </div>
          <Image src={t('image_seven')} width={500} height={400} alt="About Us" className="rounded-lg shadow-xl animate__animated animate__fadeIn" />
        </div>
      </section>
      <section id="contact" className="bg-gradient-to-r from-red-600 via-red-800 to-black py-20 md:py-28">
  <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-4 md:flex-row md:px-6">
    <div className="max-w-2xl text-center md:text-left animate__animated animate__fadeInUp animate__faster">
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-black">{t('heading_thirteen')}</h2>
      <p className="mt-4 text-black">
        {t('paragraph_fourteen')}
      </p>
      <div className="mt-8 flex items-center justify-center gap-4 md:justify-start">
        <Link href="#" className="text-black hover:text-primary" prefetch={false}>
          <TwitterIcon className="h-6 w-6" />
        </Link>
        <Link href="#" className="text-black hover:text-primary" prefetch={false}>
          <LinkedinIcon className="h-6 w-6" />
        </Link>
        <Link href="#" className="text-black hover:text-primary" prefetch={false}>
          <GitlabIcon className="h-6 w-6" />
        </Link>
      </div>
    </div>
    <Card className="w-full max-w-md animate__animated animate__fadeIn">
      <CardHeader>
        <CardTitle className="text-black">{t('form_title')}</CardTitle>
        <CardDescription className="text-black">{t('form_paragraph')}</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-4">
          <div className="grid gap-1">
            <Label htmlFor="name" className="text-black">Name</Label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="email" className="text-black">Email</Label>
            <Input id="email" type="email" placeholder="Your email" />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="message" className="text-black">Message</Label>
            <Textarea id="message" placeholder="Your message" rows={4} />
          </div>
          <Button type="submit" className="border-gray-300 shadow-lg">Send Message</Button>
        </form>
      </CardContent>
    </Card>
  </div>
</section>

      <footer className="bg-muted py-12">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <div className="flex items-center">
            <MountainIcon className="h-8 w-8" />
            <span className="ml-3 text-xl font-bold">{t('logo_text')}</span>
          </div>
          <p className="text-muted-foreground">{t('copy')}</p>
        </div>
      </footer>
    </div>
  )
}

function GitlabIcon(props) {
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
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  )
}

function LinkedinIcon(props) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
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
