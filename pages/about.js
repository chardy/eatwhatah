import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../components/Layout'

function about() {
  return (
    <Layout>
      <div className="max-w-xs mx-auto">
        <div className="grid grid-cols-6 gap-4 pb-5">
          <div className="col-span-1">
            <Link href="/"><a><img className="pt-8" src="/home.svg"/></a></Link>
          </div>
          <div className="col-span-5">
            <img className="pl-5" src="/logo.svg"/>
          </div>
        </div>
        <h2 className="text-4xl font-bold text-white pb-3 text-center">Who do this site <br/>wan ah?</h2>
        <img className="imgSmallFixedHeight rounded-full mx-auto border-white border-2" src="/thye.png" alt="Tan Thye Chuan" />
        <h4 className="text-2xl font-bold text-white pb-3 pt-3 text-center">Tan Thye Chuan</h4>
        <div className="pb-5">
          <a href="mailto:tanthyechuan@gmail.com" className="flex items-center justify-center px-6 py-3 border border-gray-300 text-base leading-6 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 mx-auto w-40">Contact Me</a>
        </div>
        <h2 className="text-4xl font-bold text-white pb-3 text-center">Why leh?</h2>
        <p className="text-white text-center mb-5">
          This CB period damn CB on everyone, especially food business.
        </p>
        <p className="text-white text-center mb-5">
          Sometimes until our favourite smaller players (with damn good food) still not getting enough sales and dying leh.
        </p>
        <p className="text-white text-center mb-5">
          Why? Cause when you order food online, people tend to only wan to recommend bigger, more popular choices.
        </p>
        <p className="text-white text-center mb-20">
          So I say, walao liddat not good leh. And I designed a website for people to find a choice, picked randomly.
        </p>
      </div>
    </Layout>
  )
}

export default about;
