import NewMeetupForm from "../components/meetups/newMeetupForm";
import { useHistory } from "react-router-dom";

function NewMeetupPage() {
  const navigate = useHistory()
  const meetupDataHandler = async (meetupData) => {
    try {
      await fetch(
        "https://reactjs-meetup-a24a9-default-rtdb.firebaseio.com/meetups.json",
        {
          method: "POST",
          body: JSON.stringify(meetupData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    } finally {
      navigate.replace('/')
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold uppercase mb-8 text-center">
        Add New Meetup
      </h1>
      <NewMeetupForm onAddMeetup={meetupDataHandler} />
    </div>
  );
}

export default NewMeetupPage;
