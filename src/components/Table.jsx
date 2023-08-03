import styles from "../style";
import {motion} from "framer-motion";

import React, { useState, useEffect} from "react";
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from '@tanstack/react-table'
import { Web3Storage } from 'web3.storage'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveSelectedUser } from "../state/userData/userDataSlice";

  
  

const columnHelper = createColumnHelper()

const columns = [
columnHelper.accessor('name', {
cell: info => info.getValue(),
footer: info => info.column.id,
}),
columnHelper.accessor(row => row.cid, {
id: 'cid',
cell: info => <i>{info.getValue()}</i>,
header: () => <span>cid</span>,
footer: info => info.column.id,
}),
columnHelper.accessor('size', {
header: () => 'size',
cell: info => info.renderValue(),
footer: info => info.column.id,
}),
columnHelper.accessor('createdAt', {
header: () => <span>CreatedAt</span>,
footer: info => info.column.id,
}),
]

//loading idicator
const loadingContainer = {
  width: "4rem",
  height: "4rem",
  display: "flex",
  justifyContent: "space-around",
};

const loadingCircle = {
  display: "block",
  width: "1rem",
  height: "1rem",
  backgroundColor: "#54dae2",
  borderRadius: "0.5rem",
}; 

const loadingContainerVariants = {
  start: {
    opacity: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const loadingCircleVariants = {
  start: {
    opacity: 0.3,
    y: "0%",
  },
  end: {
    opacity: 1,
    y: "100%",
  },
};
const loadingCircleTransition = {
  duration : 0.4,
  repeat : Infinity,
  repeatType : "reverse",
  ease: 'easeInOut'
}
//end of loading indicator

const Table = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [data, setData] = useState('')
    const [loading, setLoading] = useState(true)
    
  
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    })

    useEffect(() => {
        fetchFunction();
    }, [])

  

  const getAccessToken = () => {
    // console.log(process.env.WEB3STORAGE_TOKEN)
    return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDY1MEU3NjRFMEM4NjAwQ2Q5QTQ1MTZENzJGMTFEOTM3NjViMjIyOTAiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2Njk1MDU4OTc4OTYsIm5hbWUiOiJtYWx1bHUifQ.tbHFCYkW0UH97BDcByYgOeznM8vsZSXbVuZolNooa8A';
  }

  const makeStorageClient = () => {
    return new Web3Storage({token:getAccessToken()})
  }



  const listUsers = async() => {
    const client = makeStorageClient();
    const listItems = []
    for await (const upload of client.list()) {
        listItems.push({
            name:upload.name,
            cid:upload.cid,
            size:upload.dagSize,
            createdAt:new Date(upload.created).toString()
        })
        console.log(`${upload.name} - cid: ${upload.cid} - size: ${upload.dagSize}`)
      }
      setData(listItems)
      setLoading(false) //Data fething is complete
  }


    const fetchFunction =  async() => {  
       const users = await listUsers()
    }


    const handleData = (x) => {
        dispatch(saveSelectedUser(x.row.original))
        console.log(x.row.original)
    }

  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow w-full`}>
      <div className="flex-1 flex flex-col bg-black-gradient-1">
      <div className="p-2 w-full flex flex-col items-center">
      
{/*Show loading indicator*/}
{loading ? (<motion.div 
style={loadingContainer}
variants={loadingContainerVariants}
initial="start"
animate="end"
>
  <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
</motion.div>): (
  <table cellPadding={20} border={10} className="border border-black">
  <thead>
 {table.getHeaderGroups().map(headerGroup => (
  <tr  className="border border-black" key={headerGroup.id}>
    {headerGroup.headers.map(header => (
      <th key={header.id} className={styles.paragraphtwo}>
        {header.isPlaceholder
          ? null
          : flexRender(
              header.column.columnDef.header,
              header.getContext()
            )}
      </th>
    ))}
  </tr>
))}
</thead>
<tbody>
{table.getRowModel().rows.map(row => (
  <tr className="border border-black hover:cursor-pointer" key={row.id}>
    {row.getVisibleCells().map(cell => (
      <td className={styles.paragraph} onClick={() =>{ 
          handleData(cell.getContext())
          navigate("/user")
      }
          } key={cell.id}>
        {flexRender(cell.column.columnDef.cell, cell.getContext())}
      </td>
    ))}
  </tr>
))}
</tbody>
</table>
)}
         
      <div className="h-4" />
      <button style={{cursor: "pointer"}} onClick={() => setLoading(true)} className={`${styles.paragraph} border p-2`}>
        Refresh       
      </button>
    </div>
        <form >
        
        
        </form>
    </div>
    
    </section>
  )
}

export default Table






