export default function ProfilePage() {
  if (Math.floor(Date.now() / 1000) % 2 === 0) {
    throw new Error("Error Profile Page.");
  }

  return <h1>Profile Page</h1>;
}
