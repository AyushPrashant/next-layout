import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Card from "@/components/Card";

export default function Home() {


  return (
    <>
      <Navbar />
      <Main/>
      <div className="flex flex-wrap">
      <Card  title = "People" description= " Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator." image="/people.svg" btn="Connect"/>
      <Card title = "Place" description= " Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue." image="/location.svg" btn="Meet up"/>
      <Card  title = "Product" description= "Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members." image="/product2.svg" btn="Get it"/>
      <Card  title = "Program" description= "Find events, meetups and workshops related to your hobby.  Register or buy tickets online." image="/program.svg" btn="Attend"/>
      </div>
    </>
  );
}
