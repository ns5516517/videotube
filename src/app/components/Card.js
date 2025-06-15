import Image from 'next/image'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { dateFormatter } from '@/helper/apis';
import Link from 'next/link';

const Card = ({ video }) => {
    console.log(video)
    return (
        <>
            <Link href={''} className="card w-full flex flex-col gap-5">
                <div className="card-top">
                    <div className="image_area h-56 w-full">
                        <Image src={video?.thumbnail} alt='...' title='...' fetchPriority='low' width={350} height={225} className='w-full h-full object-cover' />
                    </div>
                    <div className="vedio_wrapper">
                        {/* <video autoPlay loop muted  >
                            <source src="" type="video/mp4" />
                        </video> */}
                    </div>
                </div>
                <div className="card-bottom flex gap-3">
                    <div className="left">
                        <Avatar>
                            <AvatarImage src={video?.owner?.avatar} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="right flex flex-col gap-1">
                        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{video?.title}</h4>
                        <p className='text-accent leading-7'>{video?.owner?.fullname}</p>
                        <ul className='flex items-center flex-wrap [&>li]:relative [&>li+li]:pl-4 [&>li+li]:ml-4 [&>li+li]:before:content-[""] [&>li+li]:before:absolute [&>li+li]:before:left-0 [&>li+li]:before:top-1/2 [&>li+li]:before:-translate-y-1/2 [&>li+li]:before:w-1 [&>li+li]:before:h-1 [&>li+li]:before:bg-accent [&>li+li]:before:rounded-full'>
                            <li className='text-accent relative'>{video?.views} views</li>
                            <li className='text-accent relative'>{dateFormatter(video?.createdAt)}</li>
                        </ul>
                    </div>
                </div>
            </Link >
        </>
    )
}

export default Card
