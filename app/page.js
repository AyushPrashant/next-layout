import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mt-6 p-4">
        <Card className='hover:bg-[#8064A2]' title="People" description="Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator." image="/people.svg" btn="Connect" />
        <Card className='hover:bg-[#77933C]' title="Place" description="Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue." image="/location.svg" btn="Meet up" />
        <Card className='hover:bg-[#C0504D]' title="Product" description="Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members." image="/product2.svg" btn="Get it" />
        <Card className='hover:bg-[#0096C8]' title="Program" description="Find events, meetups and workshops related to your hobby. Register or buy tickets online." image="/program.svg" btn="Attend" />
      </div>
    </>
  );
}
