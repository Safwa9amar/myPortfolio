import { H1, H2, TextWithBg } from "../../components/all_in_one";
import mydata from "../../components/data";
import { motion } from "framer-motion";

const Description = () => {
  return (
    <div className="flex flex-col w-full  ">
      <TextWithBg>
        <H1>Dev</H1>
        <H2>Designer & Web Developer</H2>
      </TextWithBg>
      <div className="w-full flex  flex-col items-center prose-sm md:prose-md lg:prose-lg ">
        <motion.div
          className="flex flex-col items-center"
          initial={{ filter: "blur(10px)" }}
          whileInView={{ filter: "blur(0px)" }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="http://www.goodmorningimagesdownload.com/wp-content/uploads/2021/07/1080p-New-Cool-Whatsapp-Dp-Profile-Images-pictures-hd-1-300x300.jpg"
            alt="puc"
            loading="lazy"
            className="rounded-[50%] border-4 border-slate-500 hover:scale-110 transition-transform hover:shadow-md hover:shadow-orange-500 "
          />
          <h3 className="text-red-700 uppercase "> {mydata.about.Name}</h3>
        </motion.div>
        <Personal data={mydata.about} className="w-1/2" />
      </div>
    </div>
  );
};

const Personal = ({ data }) => {
  return (
    <div className="">
      <strong className="text-orange-300">Degree : </strong> {data.Degree} |
      <strong className="text-orange-300">Exp : </strong> {data.Experience} |
      <strong className="text-orange-300">Mobile : </strong> {data.Phone} |
      <strong className="text-orange-300">Mail : </strong> {data.Email} |
      <strong className="text-orange-300">Freelance : </strong> {data.FreeLance}
    </div>
  );
};
export default Description;
