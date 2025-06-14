import { PillProps } from "@/interfaces";

const Pill:React.FC<PillProps> = ({ label, selected, onClick }) => {
  return (
    <button onClick={onClick} 
    className={`px-5 py-1 rounded-full border transition ${selected ? 'bg-white text-green-600 border-green-600' : 'bg-white text-black border-gray-300 '}`}>
      {label}
      </button>
  )
}
export default Pill;