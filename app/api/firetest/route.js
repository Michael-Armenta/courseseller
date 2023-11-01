import { db } from "@/lib/firebase/firebaseConfig";

async function GET(req, { params }) {
  const dbRef = db.ref("/users");
  const dataSnapshot = await dbRef.once("value");
  const rdtData = dataSnapshot.val();

  return Response.json(rdtData);
}

export { GET };
