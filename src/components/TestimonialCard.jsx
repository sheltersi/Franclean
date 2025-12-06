import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TestimonialCard({ name, text, location }) {
  return (
    <div className="card">
<div className=""> 
<FontAwesomeIcon icon={faStar} className="text-[#FFB43B] text-xl"  />
<FontAwesomeIcon icon={faStar} className="text-[#FFB43B] text-xl"  />
<FontAwesomeIcon icon={faStar} className="text-[#FFB43B] text-xl"  />
<FontAwesomeIcon icon={faStar} className="text-[#FFB43B] text-xl"  />
<FontAwesomeIcon icon={faStar} className="text-[#FFB43B] text-xl"  />

</div>
      
      <p className="text-sm text-slate-700 mb-3">“{text}”</p>
      <p className="text-xs font-medium text-slate-500">
        {name} • {location}
      </p>
    </div>
  );
}
