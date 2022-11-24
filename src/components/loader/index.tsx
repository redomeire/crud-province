import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Loader = () => {
    return (
        <div className='m-3 md:w-[90%] w-full border p-3 rounded-xl'>
            <SkeletonTheme
                baseColor='#eaeaea'
                highlightColor='#ffffff'
                direction='ltr'
            >
                <div className='flex flex-col'>
                    {/* <Skeleton className='h-[200px] ' /> */}
                    <Skeleton className='h-[8px] mt-4 ' width={'100%'} />
                    <div className='flex items-center justify-between'>
                        <Skeleton className='h-[8px]' width={80} />
                        {/* <div style={{ marginTop: '-20px' }}>
                            <Skeleton className='h-[20px]' width={80} />
                        </div> */}
                    </div>
                </div>
            </SkeletonTheme>
        </div>
    );
}

export default Loader;