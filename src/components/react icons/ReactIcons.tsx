import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const  Chat = () => {

    const location = useLocation();
    const [ color, setColor ] = useState("#C1C4CD");
    
    useEffect(()=>{
       if(location.pathname.startsWith("/chats")){
          setColor("#0466C8")
       }else{
          setColor("#C1C4CD")
       }
    },[location])
    
    return (
        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" >
            <g id="Group 25" opacity="0.6">
            <g id="Group 26">
                <g id="Ellipse 15" opacity="0.6" filter="url(#filter0_d_2189_11)">
                <path d="M35 19.5C35 13.1487 29.8513 8 23.5 8C17.1487 8 12 13.1487 12 19.5C12 25.8513 17.1487 31 23.5 31C29.8513 31 35 25.8513 35 19.5Z" stroke={color} strokeWidth="3"/>
                </g>
                <path id="T" 
                    opacity="0.6"
                    d="M26.8984 17.6353H24.5267V23.6783H22.8156V17.6353H20.4547V16H26.8984V17.6353Z" 
                    stroke={color} 
                    strokeWidth="0.803901"
                />
            </g>
            </g>
            <defs>
                <filter id="filter0_d_2189_11" x="0.807143" y="0.684286"
                        width="45.3857" height="45.3857" filterUnits="userSpaceOnUse" 
                        colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="3.87714"/>
                    <feGaussianBlur stdDeviation="4.84643"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.0705882 0 0 0 0 0.2 0 0 0 0.13 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2189_11"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2189_11" result="shape"/>
                </filter>
            </defs>
        </svg>

    )
}

export const BudgetChart = () => {

    const location = useLocation();
    const [ color, setColor ] = useState("#C1C4CD")

    useEffect(()=>{
        if(location.pathname === "/"){
            setColor("#0466C8")
        }else{
            setColor("#C1C4CD")
        }

    },[location])

    
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path id="Vector" d="M0 6H4.28571V20H0V6ZM8 0H12V20H8V0ZM16 11.4286H20V20H16V11.4286Z" fill={color} />
        </svg>

    )
}

export const Profile = () => {
    const location = useLocation();
    const [ color, setColor ] = useState("#C1C4CD")

    useEffect(()=>{
        if(location.pathname.startsWith("/profile")){
            setColor("#0466C8")
        }else{
            setColor("#C1C4CD")
        }

    },[location])

    return (
       <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path id="Vector" d="M10 2.5C11.375 2.5 12.5 3.625 12.5 5C12.5 6.375 11.375 7.5 10 7.5C8.625 7.5 7.5 6.375 7.5 5C7.5 3.625 8.625 2.5 10 2.5ZM10 15C13.375 15 17.25 16.6125 17.5 17.5H2.5C2.7875 16.6 6.6375 15 10 15ZM10 0C7.2375 0 5 2.2375 5 5C5 7.7625 7.2375 10 10 10C12.7625 10 15 7.7625 15 5C15 2.2375 12.7625 0 10 0ZM10 12.5C6.6625 12.5 0 14.175 0 17.5V20H20V17.5C20 14.175 13.3375 12.5 10 12.5Z" 
         fill={color}/>
       </svg>
    )
}

export const Reports = () => {
    const location = useLocation();
    const [ color, setColor ] = useState("#C1C4CD")

    useEffect(()=>{
        if(location.pathname.startsWith("/reports")){
            setColor("#0466C8")
        }else{
            setColor("#C1C4CD")
        }
    },[location])

    return (
        <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path id="Vector" d="M17.5 0H2.5C1.125 0 0 1.125 0 2.5V17.5125C0 18.8875 1.125 20 2.5 20H22.5C23.875 20 25 18.875 25 17.5V7.5L17.5 0ZM2.5 17.5125V2.5H16.25V8.75H22.5V17.5125H2.5Z"
              fill={color} />
        </svg>

    )
}


export const Home  = () => {

    
    const location = useLocation();
    const [ color, setColor ] = useState("#C1C4CD")

    useEffect(()=>{
        if(location.pathname.startsWith("/dashboard")){
            setColor("#0466C8")
        }else{
            setColor("#C1C4CD")
        }

    },[location])

    return (
        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="Vector" d="M11.7647 3.16471L17.6471 8.45882V17.6471H15.2941V10.5882H8.23529V17.6471H5.88235V8.45882L11.7647 3.16471ZM11.7647 0L0 10.5882H3.52941V20H10.5882V12.9412H12.9412V20H20V10.5882H23.5294L11.7647 0Z"
         fill={color} />
        </svg>

    )
}

export const Ham = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16" fill="none">
        <circle cx="10.5" cy="8.5" r="1.5" fill="#707480"/>
        <circle cx="15.5" cy="8.5" r="1.5" fill="#707480"/>
        <circle cx="20.5" cy="8.5" r="1.5" fill="#707480"/>
        </svg>
    )
}




export const FoodAndDrink = ({ progress }:{ progress: number }) => {
    
    const [dashOffset, setDashOffset] = useState(472);
    useEffect(() => {

        const calculatedOffset = 472 - (472 * progress) / 100;
      setDashOffset(calculatedOffset);
    }, [progress]);


  return (
    <div className=" relative">
        <svg style={{position:"absolute",top:"0",bottom:"0",left:"0",right:"0",margin:"auto"}} id="progress-border" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 160 160" width="56" height="56">
                    <circle fill="none" stroke="#C89104" strokeWidth="6%" strokeDasharray="472" strokeDashoffset={dashOffset} cx="80" cy="80" r="70" stroke-linecap="round" />
         </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <circle cx="25" cy="25" r="23" fill="#F4E9CD"/>
            <mask id="path-2-inside-1_1_77" fill="white">
            <path d="M25 0C29.388 -5.2326e-08 33.6987 1.15492 37.4989 3.34871C41.2991 5.5425 44.4549 8.69787 46.6493 12.4977C48.8437 16.2976 49.9993 20.6081 50 24.9961C50.0007 29.384 48.8464 33.6949 46.6533 37.4955L44.4879 36.2459C46.4618 32.8254 47.5006 28.9456 47.5 24.9965C47.4994 21.0473 46.4593 17.1678 44.4844 13.748C42.5094 10.3281 39.6692 7.48825 36.249 5.51384C32.8288 3.53943 28.9492 2.5 25 2.5V0Z"/>
            </mask>
            <path d="M34.3166 31.7714H12V34.4H38.2857V31.7714H34.3166ZM36.9714 30.4571C36.6166 25.108 32.7 20.7314 27.5611 19.6669C27.6926 19.3514 27.7714 18.9966 27.7714 18.6286C27.7714 17.1829 26.5886 16 25.1429 16C23.6971 16 22.5143 17.1829 22.5143 18.6286C22.5143 18.9966 22.5931 19.3514 22.7246 19.6669C17.5857 20.7314 13.6691 25.108 13.3143 30.4571H36.9714ZM25.1429 22.0194C29.02 22.0194 32.332 24.4246 33.6857 27.8154H16.6C17.9537 24.4246 21.2657 22.0194 25.1429 22.0194Z" fill="#C89104"/>
        </svg>
   </div>
  );
};


export const Icon = ({ category, budget, totalSpent, icon:IconComponent }: { category: string, budget: number, totalSpent: number, icon: any }) => {
  return (
    <div>
      {IconComponent && <IconComponent progress={(totalSpent / budget) * 100} />}
    </div>
  );
};

export const Saving = ({ progress }:{ progress: number }) => {

    const [dashOffset, setDashOffset] = useState(472);
    useEffect(() => {
        const calculatedOffset = 472 - (472 * progress) / 100;
      setDashOffset(calculatedOffset);
    }, [progress]);

    return (
        <div className=" relative">
            <svg style={{position:"absolute",top:"0",bottom:"0",left:"0",right:"0",margin:"auto"}} id="progress-border" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 160 160" width="56" height="56">
                <circle fill="none" stroke="#038A39" strokeWidth="6%" strokeDasharray="472" strokeDashoffset={dashOffset} cx="80" cy="80" r="70" stroke-linecap="round" />
            </svg>
            <svg id="parent" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                <mask id="path-1-inside-1_1_66" fill="white">
                    <path d="M25 0C29.388 -5.2326e-08 33.6987 1.15492 37.4989 3.34871C41.2991 5.5425 44.4549 8.69787 46.6493 12.4977C48.8437 16.2976 49.9993 20.6081 50 24.9961C50.0007 29.384 48.8464 33.6949 46.6533 37.4955L44.4879 36.2459C46.4618 32.8254 47.5006 28.9456 47.5 24.9965C47.4994 21.0473 46.4593 17.1678 44.4844 13.748C42.5094 10.3281 39.6692 7.48825 36.249 5.51384C32.8288 3.53943 28.9492 2.5 25 2.5V0Z"/>
                </mask>
                    <circle cx="25" cy="25" r="23" fill="#038A39" fill-opacity="0.3"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30.2391 16.0966C29.8248 15.8906 29.2665 15.7014 28.617 15.8574C28.2873 15.9366 27.9998 16.09 27.7462 16.2778C25.1556 15.6415 22.349 15.9915 20.1016 17.2277C17.6211 18.5922 15.8 21.0611 15.8 24.4162C15.8 26.9125 16.9322 29.2883 18.9579 30.9043V32.9849V34.1685L20.1414 34.1847L21.2349 34.1997L21.2349 34.1999H21.2514H21.9756V34.2L21.9926 34.1997L23.0495 34.1847L24.2324 34.1679V32.9849V32.9457C24.7339 32.9877 25.2326 32.9911 25.7216 32.9547V32.9849V34.1691L26.9057 34.1847L28.0422 34.1998L28.0422 34.1999H28.058H28.7821V34.2L28.7999 34.1997L29.8139 34.1847L30.9961 34.1672V32.9849V30.9009C32.0545 30.0496 32.9033 28.9697 33.4574 27.8089H34.2387H35.4052L35.4382 26.6428L35.5612 22.2934L35.5957 21.0705L34.3723 21.0596L33.4573 21.0514C32.9678 20.0362 32.2573 19.0914 31.4763 18.3176C31.4639 18.1949 31.4457 18.0573 31.4189 17.9131C31.3723 17.6627 31.2911 17.3434 31.1385 17.0348C30.9892 16.7327 30.7184 16.335 30.2391 16.0966ZM21.8324 31.5449V31.7999H21.3578V30.3001V29.667L20.8352 29.3096C19.1295 28.1431 18.2 26.3186 18.2 24.4162C18.2 22.047 19.4426 20.3294 21.2584 19.3305C23.1104 18.3117 25.5335 18.0677 27.6943 18.7549L28.4168 18.9847L28.9345 18.431C28.9787 18.3837 29.0177 18.3446 29.0516 18.3123L29.0594 18.352C29.0827 18.4772 29.0944 18.6044 29.0998 18.7041C29.1023 18.7525 29.1032 18.7908 29.1035 18.8147L29.1036 18.8385L29.1036 18.8395L29.1036 18.8407L29.1036 18.8408L29.0925 19.3857L29.5017 19.7531C30.4006 20.5602 31.1678 21.624 31.5238 22.6409L31.8024 23.4368L32.6457 23.4443L33.1276 23.4486L33.0722 25.4089H32.6564H31.8042L31.5234 26.2134C31.1199 27.3696 30.2636 28.519 29.1143 29.3127L28.5962 29.6705V30.3001V31.7999H28.1215V31.5449V29.9862L26.6146 30.3849C25.6439 30.6417 24.4912 30.6509 23.3031 30.3759L21.8324 30.0354V31.5449ZM28.9816 18.0881L28.9843 18.0928C28.9833 18.0911 28.9826 18.0898 28.9822 18.0891C28.9818 18.0884 28.9816 18.0881 28.9816 18.0881ZM28.1657 22.7796V22.7796C28.1657 22.8462 28.1447 22.9788 28.0293 23.1083C27.9004 23.253 27.7332 23.3037 27.619 23.3037C27.5156 23.3037 27.3856 23.2626 27.2785 23.1579C27.173 23.0546 27.1174 22.9154 27.1174 22.7796H27.619H28.1173L27.619 22.7794L27.1174 22.7793C27.1174 22.6437 27.173 22.5044 27.2787 22.4011C27.3858 22.2963 27.5158 22.2553 27.619 22.2553C27.7329 22.2553 27.9001 22.3059 28.0291 22.4506C28.1446 22.5802 28.1657 22.7129 28.1657 22.7796ZM27.619 21.3038C27.2122 21.3038 26.8183 21.4611 26.536 21.778C26.2671 22.0797 26.1658 22.4503 26.1658 22.7796C26.1658 23.1091 26.2672 23.4797 26.5362 23.7814C26.8187 24.0983 27.2125 24.2553 27.619 24.2553C28.4428 24.2553 29.1171 23.6156 29.1173 22.7799V22.7796C29.1173 21.9441 28.4432 21.3038 27.619 21.3038Z" fill="#038A39"/>
            </svg>
        </div>
    )
}

export const Progress = ({color,progress}:{color: string, progress: number}) => {

    const [dashOffset, setDashOffset] = useState(472);

    useEffect(() => {
      const calculatedOffset = 472 - (472 * progress) / 100;
      setDashOffset(calculatedOffset);
    }, [progress]);

    return (
        <svg style={{position:"absolute",top:"0",bottom:"0",left:"0",right:"0",margin:"auto"}} id="progress" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 160 160" width="190" height="190">
            <circle fill="none" stroke={color} strokeWidth="6%" strokeDasharray="472" strokeDashoffset={dashOffset} cx="80" cy="80" r="70" stroke-linecap="round" />
         </svg>
      )
}
