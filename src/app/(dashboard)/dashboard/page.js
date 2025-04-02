import React from 'react'
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

async function  DashboardPage() {
    const session = await auth();

    if (!session?.payload.token){
        redirect("/login")
    }
   
    
  return (
    <div>
      Dash
    </div>
  )
}

export default DashboardPage
