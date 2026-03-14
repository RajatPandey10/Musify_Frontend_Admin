import DashboardLayout from '../layout/DashboardLayout.jsx';
import {useState,useEffect} from 'react';
import {albumsAPI} from '../services/apiService.js';
import {toast} from 'react-hot-toast';
import {Image,Palette,FileText} from 'lucide-react';

const ListAlbum = ()=>{

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);

    const fetchAlbums= async ()=>{
        setLoading(true);
        try{
            const response = await albumsAPI.list();
            setData(response.data.albums);
        }catch(error){
            toast.error("Failed to load albums");
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchAlbums();
    },[]);

    return (
        <DashboardLayout activeMenu='List Album'>
            <div className='p-6'>
                {/* header section */}
                <div className='mb-8'>
                    <h1 className='text-3xl font-bold text-gray-900 mb-2'>
                        Albums Library
                    </h1>
                    <p className='text-gray-600'>Manage your album collection</p>

                </div>
                {/* table container */}
                <div className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200'>
                    {/* table header */}
                    <div className='bg-gradient-to-r from-[#3be477] to-[#2dd865] px-6 py-4'>
                        <div className="grid grid-cols-12 gap-4 items-center text-white font-semibold">
                            <div className='col-span-2 flex items-center gap-2'>
                                <Image className='w-4 h-4' />
                                <span>Cover</span>
                            </div>
                            <div className='col-span-3'>Album Name</div>
                            <div className='col-span-3 flex items-center gap-2'>
                                <FileText className='w-4 h-4' />
                                <span>Description</span>

                            </div>
                            <div className='col-span-2 flex items-center gap-2'>
                                <Palette className='w-4 h-4' />
                                <span>Theme</span>
                            </div>
                            <div className='col-span-2 text-center'>Actions</div>
                            

                        </div>

                    </div>

                    {/* Table body */}
                    <div className='divide-y divide-gray-100'>
                        {data.length === 0 ? (
                            <div className='px-6 py-12 text-center'>
                                <Image className='w-12 h-12 text-gray-400 mx-auto mb-4' />
                                <p className=' text-gray-500 text-lg'>Np albums found</p>
                                <p className='text-gray-400 text-sm'>Add some albums to get started</p>
                            </div>
                        ): (
                            data.map((album,index)=>(
                                <div key={index} className='grid grid-cols-12 gap-4 items-center px-6 py-4 hover:bg-gray-50 transition-colors duration-200'>
                                    {/* Album Image */}
                                    <div className='col-span-2'>
                                        <div className='w-12 h-12 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden'>
                                            <img src={album.imageUrl} alt={album.name} className='w-full h-full object-cover'></img>
                                        </div>    
                                    </div>

                                    {/* album name */}
                                    <div className='col-span-3'>
                                        <p className='font-medium text-gray-900 truncate'>
                                            {album.name}
                                        </p>
                                    </div>

                                     {/* album description */}
                                    <div className='col-span-3'>
                                        <p className='text-gray-600 truncate'>
                                            {album.desc || "No description"}
                                        </p>
                                    </div>

                                     {/* album color */}
                                    <div className='col-span-2'>
                                        <div className='flex items-center gap-2'>
                                            <div> </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default ListAlbum;