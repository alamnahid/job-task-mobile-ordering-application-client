

const OurServiceCard = ({img, text}) => {
    return (
        <div className="flex items-center gap-2">
            <img src={img} alt="" />
            <h1 className="text-[#232323] font-medium">{text}</h1>
            
        </div>
    );
};

export default OurServiceCard;