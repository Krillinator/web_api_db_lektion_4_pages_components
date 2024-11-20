export default function CustomButton({ title }: { title: string }) {
  return (
    <button className=" p-4 bg-sky-500 font-bold hover:bg-sky-400">
      {title}
    </button>
  )
}
