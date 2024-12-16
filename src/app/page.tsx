// Importing the Next.js Image component for optimized image handling
import Image from "next/image";

// Importing the Next.js Link component for client-side navigation
import Link from "next/link";

// Importing a Button component from the UI folder for reusable buttons
import { Button } from "../components/ui/button";

// Importing Select components from the UI folder for dropdown functionality
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

// Importing Carousel components from the UI folder to implement a carousel/slider
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

// Importing Card components from the UI folder for creating styled card layouts
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

// Importing an email icon from the react-icons library for consistent icon usage
import { MdOutlineEmail } from "react-icons/md";

// Exporting the default Home function component for the page
export default function Home() {
  // Defining an array of image paths to be used in the carousel or elsewhere
  const images = [
    "/array1.jpg", // Path to the first image
    "/array2.jpg", // Path to the second image
    "/array3.jpg", // Path to the third image
    "/array4.jpg", // Path to the fourth image
    "/array5.jpg", // Path to the fifth image
    "/array6.jpg", // Path to the sixth image
    "/array7.jpg", // Path to the seventh image
    "/array7.jpg", // Duplicate path for the seventh image
  ];

  return (
    <div className=" bg-white min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="navbar top-0 fixed z-50 w-full h-[70px] bg-[#06306b] flex items-center justify-between sm:px-20">
        <div className="logo_button">
          <Link href="/">
            <Image
              src="https://www.governorsindh.com/_next/static/media/logo.9ff76f62.png"
              alt="logo"
              width={80}
              height={80}
              className=" absolute -bottom-12 sm:w-20 sm:h-20 w-16 h-16 z-50"
            />
          </Link>
        </div>
        <div className="title">
          <h1 className=" text-gray-300 font-bold  text-nowrap text-[10px] sm:text-[15px] lg:text-[20px]">
            Tuition Free Education Program on Latest Technologies
          </h1>
        </div>
        <div className="buttons text-white   sm:items-center hidden sm:flex -ml-10 lg:-ml-0">
          <Button variant="ghost" className=" text-[10px] lg:text-[15px]">
            Home
          </Button>
          <Button variant="ghost" className=" text-[10px] lg:text-[15px]">
            Apply
          </Button>
          <Button variant="ghost" className=" text-[10px] lg:text-[15px]">
            Jobs
          </Button>
          <Button variant="ghost" className=" text-[10px] lg:text-[15px]">
            Result
          </Button>
          <Select>
            <SelectTrigger className="w-[100px] border-0 focus:border-none focus:outline-none">
              <SelectValue placeholder="Courses" />
            </SelectTrigger>
            <SelectContent className=" flex flex-col gap-4 bg-white">
              <h1 className=" text-lg font-bold">Core Courses</h1>
              <h3 className=" cursor-pointer hover:text-blue-600">
                Programming Fundamentals
              </h3>
              <h3 className=" cursor-pointer hover:text-blue-600">
                Web2 Using NextJS
              </h3>
              <h3 className=" cursor-pointer hover:text-blue-600">
                Earn As You Learn
              </h3>
              <hr />
              <h1 className=" text-lg font-bold">Advanced Courses</h1>
              <h3 className=" cursor-pointer hover:text-blue-600">
                Web 3 and Metaverse
              </h3>
              <h3 className=" cursor-pointer hover:text-blue-600">
                Cloud-Native Computing
              </h3>
              <h3 className=" cursor-pointer hover:text-blue-600">
                Artificial Intelligence (AI) and Deep Learning
              </h3>
              <h3 className=" cursor-pointer hover:text-blue-600">
                Ambient Computing and IoT
              </h3>
              <h3 className=" cursor-pointer hover:text-blue-600">
                Genomics and Bioinformatics
              </h3>
              <h3 className=" cursor-pointer hover:text-blue-600">
                Network Programmability and Automation
              </h3>
            </SelectContent>
          </Select>
        </div>
        <div className="small_screen sm:hidden">
          <Select>
            <SelectTrigger className="w-[80px] border-0 focus:border-none focus:outline-none">
              <SelectValue
                placeholder={
                  <Image
                    src="/hamburger Background Removed.png"
                    alt="menu"
                    width={30}
                    height={30}
                  ></Image>
                }
              />
            </SelectTrigger>
            <SelectContent className=" bg-white">
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">Apply</Button>
              <Button variant="ghost">Jobs</Button>
              <Button variant="ghost">Result</Button>
              <h1 className=" text-lg font-bold">Core Courses</h1>
              <h3 className=" cursor-pointer hover:text-blue-600">
                Programming Fundamentals
              </h3>
              <h3 className=" cursor-pointer hover:text-blue-600">
                Web2 Using NextJS
              </h3>
              <h3 className=" cursor-pointer hover:text-blue-600">
                Earn As You Learn
              </h3>
              <hr />
              <h1 className=" text-lg font-bold">Advanced Courses</h1>
              <h3 className=" cursor-pointer hover:text-blue-600">
                Web 3 and Metaverse
              </h3>
              <h3 className=" cursor-pointer hover:text-blue-600">
                Cloud-Native Computing
              </h3>
              <h3 className=" cursor-pointer hover:text-blue-600">
                Artificial Intelligence (AI) and Deep Learning
              </h3>
              <h3 className=" cursor-pointer hover:text-blue-600">
                Ambient Computing and IoT
              </h3>
              <h3 className=" cursor-pointer hover:text-blue-600">
                Genomics and Bioinformatics
              </h3>
              <h3 className=" cursor-pointer hover:text-blue-600">
                Network Programmability and Automation
              </h3>
            </SelectContent>
          </Select>
        </div>
      </div>
      <section className="relative w-full min-h-screen sm:h-[700px] mt-20">
        <div className="absolute inset-0">
          <Image
            src="https://www.governorsindh.com/bg_house.jpg"
            width={400}
            height={400}
            alt="banner"
            className=" w-full h-full opacity-25"
          />
        </div>
        <div className="relative z-10 sm:flex-row sm:items-center sm:justify-between h-full sm:pl-20 px-14 flex flex-col gap-20 sm:gap-0">
          <div className="text flex flex-col gap-4">
            <h1 className=" text-[#06306b] font-bold text-5xl">
              Governor Sindh
            </h1>
            <h3 className="text-[#06306b] text-2xl">Kamran Khan Tessori</h3>
            <h3 className=" text-sky-400 font-bold text-4xl text-wrap max-w-md">
              Certified Cloud Applied Generative AI Engineer (GenEng)
            </h3>
            <h1 className=" text-[#06306b] font-bold text-2xl">
              Earn up to $5,000 / month
            </h1>
            <h1 className=" text-[#06306b] font-bold text-2xl">
              Now admissions are open in Hyderabad
            </h1>
            <div className="buttons flex items-center gap-5">
              <Button className="animated-element rounded-md p-8 bg-[#06306b] text-white text-2xl">
                Apply Now
              </Button>
              <div className="total flex flex-col items-center">
                <h1 className="text-[#06306b] text-5xl">562,143</h1>
                <h3 className="text-[#06306b]">Accepted Applications</h3>
              </div>
            </div>
          </div>
          <div className="image">
            <Image
              src="/governorkamrankhan.png"
              alt="cover"
              width={500}
              height={400}
              className="h-[700px] w-full"
            ></Image>
          </div>
        </div>
      </section>
      <section
        id="next"
        className=" w-full h-auto p-4 flex flex-col gap-5 items-center justify-center"
      >
        <div className="title text-center text-wrap text-3xl text-[#06306b] max-w-[2000px] font-bold ">
          <h1>
            Certified Cloud Applied Generative AI Engineer (GenEng) and
            Solopreneur Developing Billion-Dollar Valued Developers and
            Solopreneurs
          </h1>
        </div>
        <p className=" text-center">
          The pace of technological change is accelerating, big players like
          Microsoft, Amazon, Google, and OpenAI are winning by providing
          infrastructure, large AI foundation models, frameworks, 3D Metaverse
          experiences, and massive distribution networks. Solopreneurs trained
          in this program will win by automating work typically outsourced to
          employees, by directly connecting to customers by eliminating the
          middleman, and by developing vertical metaverses, thus paving the way
          for the first billion-dollar valued solopreneur businesses. This
          program has the objective to train this new breed of billion-dollar
          solopreneurs. These solopreneurs will adopt the ultra-lean business
          model and work independently and will not need to hire employees or
          other team members.
        </p>
        <div className="images w-full grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 gap-4">
          <Image
            src="/first.jpg"
            alt="first"
            width={400}
            height={400}
            className=" rounded-md shadow-lg shadow-black w-full h-full"
          ></Image>
          <Image
            src="/sec.jpg"
            alt="first"
            width={400}
            height={400}
            className=" rounded-md shadow-lg shadow-black w-full h-full"
          ></Image>
          <Image
            src="/third.jpg"
            alt="first"
            width={400}
            height={400}
            className=" rounded-md shadow-lg shadow-black w-full h-full"
          ></Image>
        </div>
        <div className="carousel w-full flex items-center justify-center">
          <Carousel className="md:w-[50%] w-[80%] sm:w-[60%]">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <Image
                          src={image}
                          alt={`Carousel Image ${index + 1}`}
                          width={300}
                          height={300}
                          className="object-cover w-full h-full"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="line w-full border-[1px] border-gray-300 rounded-full"></div>
      </section>
      <section
        id="second"
        className=" w-full h-auto p-8 pl-20 flex flex-col gap-10 items-start"
      >
        <h1 className="sm:text-3xl text-2xl text-nowrap text-[#06306b] font-bold">
          Core Courses Sequence
        </h1>
        <div className="cards grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 sm:gap-4 gap-10 text-gray-500 lg:mx-0">
          <div className="first animated-element cursor-pointer w-[300px] h-[300px] rounded-md shadow-md shadow-black bg-slate-100 flex flex-col items-center gap-6">
            <Image
              src="/core1.jpg"
              alt="core1"
              width={100}
              height={100}
              className=" w-full rounded-[10px]"
            ></Image>
            <h1 className=" text-xl font-bold">Programming Fundamentals</h1>
          </div>
          <div className="first animated-element cursor-pointer w-[300px] h-[300px] rounded-md shadow-md shadow-black bg-slate-100 flex flex-col items-center gap-6">
            <Image
              src="/core2.jpg"
              alt="core1"
              width={100}
              height={100}
              className=" w-full rounded-[10px]"
            ></Image>
            <h1 className=" text-xl font-bold">Web2 Using NextJS</h1>
          </div>
          <div className="first animated-element cursor-pointer w-[300px] h-[300px] rounded-md shadow-md shadow-black bg-slate-100 flex flex-col items-center gap-6">
            <Image
              src="/core3.jpg"
              alt="core1"
              width={100}
              height={100}
              className=" w-full rounded-[10px]"
            ></Image>
            <h1 className=" text-xl font-bold">Earn As You Learn</h1>
          </div>
        </div>
      </section>
      <section
        id="last"
        className="w-full h-auto p-8 pl-20 flex flex-col gap-10 items-start"
      >
        <h1 className="text-3xl text-[#06306b] font-bold">Advanced Courses</h1>
        <div className="cards grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-10 lg:grid-cols-4 text-gray-500">
          <div className="first animated-element cursor-pointer  w-[300px] h-[300px] rounded-md shadow-md shadow-black bg-slate-100 flex flex-col items-center gap-6">
            <Image
              src="/adv1.jpg"
              alt="core1"
              width={100}
              height={100}
              className="w-full rounded-[10px]"
            ></Image>
            <h1 className=" text-xl font-bold">Artificial Intelligence</h1>
          </div>
          <div className="first animated-element cursor-pointer w-[300px] h-[300px] rounded-md shadow-md shadow-black bg-slate-100 flex flex-col items-center gap-6">
            <Image
              src="/adv2.jpg"
              alt="core1"
              width={100}
              height={100}
              className=" w-full rounded-[10px]"
            ></Image>
            <h1 className=" text-xl font-bold">Web 3 and Metaverse</h1>
          </div>
          <div className="first animated-element cursor-pointer w-[300px] h-[300px] rounded-md shadow-md shadow-black bg-slate-100 flex flex-col items-center gap-6">
            <Image
              src="/adv3.jpg"
              alt="core1"
              width={100}
              height={100}
              className=" w-full rounded-[10px]"
            ></Image>
            <h1 className=" text-xl font-bold">Cloud-Native Computing</h1>
          </div>
          <div className="first animated-element cursor-pointer w-[300px] h-[300px] rounded-md shadow-md shadow-black bg-slate-100 flex flex-col items-center gap-6">
            <Image
              src="/adv4.jpg"
              alt="core1"
              width={100}
              height={100}
              className=" w-full rounded-[10px]"
            ></Image>
            <h1 className=" text-xl font-bold">Ambient Computing and IoT</h1>
          </div>
          <div className="first animated-element cursor-pointer w-[300px] h-[300px] rounded-md shadow-md shadow-black bg-slate-100 flex flex-col items-center gap-6">
            <Image
              src="/adv5.jpg"
              alt="core1"
              width={100}
              height={100}
              className=" w-full rounded-[10px]"
            ></Image>
            <h1 className=" text-xl font-bold">Genomics and Bioinformatics</h1>
          </div>
          <div className="first animated-element cursor-pointer w-[300px] h-[300px] rounded-md shadow-md shadow-black bg-slate-100 flex flex-col items-center gap-6">
            <Image
              src="/adv7.jpg"
              alt="core1"
              width={100}
              height={100}
              className=" w-full rounded-[10px]"
            ></Image>
            <h1 className=" text-xl font-bold text-center">
              Network Programmability and Automation
            </h1>
          </div>
        </div>
      </section>
      <div className="footer w-full h-full sm:h-96 sm:px-20 px-10 bg-slate-100 flex flex-col gap-4 sm:flex sm:flex-row sm:items-center sm:justify-between">
        <div className="core flex flex-col gap-4 mb-20 mt-16 sm:mt-0">
          <h1 className=" text-2xl font-bold">Core Courses</h1>
          <ul>
            <li className=" cursor-pointer">Programming Fundamentals</li>
            <li className=" cursor-pointer mt-3">Web2 Using NextJS</li>
            <li className=" cursor-pointer mt-3">Earn As You Learn</li>
          </ul>
        </div>
        <div className="adv flex flex-col gap-4 sm:mt-10">
          <h1 className=" text-2xl font-bold">Advanced Courses</h1>
          <ul>
            <li className=" cursor-pointer mt-3">Artificial Intelligence</li>
            <li className=" cursor-pointer mt-3">Web 3 and Metaverse</li>
            <li className=" cursor-pointer mt-3">Cloud-Native Computing</li>
            <li className=" cursor-pointer mt-3">Ambient Computing and IoT</li>
            <li className=" cursor-pointer mt-3">
              Genomics and Bioinformatics
            </li>
            <li className=" cursor-pointer mt-3">
              Network Programmability and Automation
            </li>
          </ul>
        </div>
        <div className="social flex flex-col gap-4 mb-32 mt-10 sm:mt-0">
          <h1 className=" text-2xl font-bold">Social Links</h1>
          <div className="logos flex items-center gap-3">
            <div className="button cursor-pointer">
              <Image
                src="/facebook.png"
                alt="fb"
                width={30}
                height={30}
                className=" rounded-full"
              ></Image>
            </div>
            <div className="button cursor-default bg-red-600 rounded-full">
              <Image
                src="/youtube Background Removed.png"
                alt="fb"
                width={28}
                height={28}
                className=" rounded-full"
              ></Image>
            </div>
            <div className="button cursor-pointer">
              <Image
                src="/instagram Background Removed.png"
                alt="fb"
                width={36}
                height={36}
                className=" rounded-full"
              ></Image>
            </div>
            <div className="button cursor-pointer bg-white rounded-full">
              <Image
                src="/twitter.png"
                alt="fb"
                width={32}
                height={32}
                className=" rounded-full"
              ></Image>
            </div>
            <div className="button cursor-pointer">
              <Image
                src="/tiktok Background Removed.png"
                alt="fb"
                width={32}
                height={32}
                className=" rounded-full"
              ></Image>
            </div>
          </div>
          <div className="email flex items-center gap-2">
            <MdOutlineEmail />
            <h1 className=" text-blue-800 underline">
              education@governorsindh.com
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
