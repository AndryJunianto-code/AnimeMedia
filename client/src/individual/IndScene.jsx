export default function IndScene({data}) {
    const {image,video,filename,episode} = data
    const title = filename.split('-')[0]
    return (
        <>
        <div className='text-center max-w-full mb-4'>
            <p className='text-lg font-semibold'>{title} <span>{episode?'ep ' + episode:''}</span></p>
            <img src={image} alt={title} className='mx-auto rounded-md lg:w-96'/>
            <video width='320' height='240' controls className='mx-auto lg:w-96'>
                <source src={video} type='video/mp4'/>
            </video>
        </div>
        </>
    )
}
