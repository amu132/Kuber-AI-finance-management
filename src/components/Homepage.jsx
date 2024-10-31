import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import heroimg from '../assets/hero-img-1.png'
import p1 from '../assets/p1.svg'
import p2 from '../assets/Ellipse-2.png'
import p3 from '../assets/Ellipse-3.png'
import p4 from '../assets/Ellipse-4.png'
import Cards from './Cards'
import ElfsightWidget from './ElfsightWidget'

function Homepage() {
  // Create refs for all elements
  const heroImageRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const loginButtonRef = useRef(null)
  const signupButtonRef = useRef(null)
  const membersTitleRef = useRef(null)
  const membersImagesRef = useRef([])
  const elfsightWidgetRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    // Timeline for coordinated animations
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" }
    })

    // Initial states
    gsap.set([heroImageRef.current, titleRef.current, descriptionRef.current, 
      loginButtonRef.current, signupButtonRef.current, membersTitleRef.current, 
      membersImagesRef.current, elfsightWidgetRef.current, cardsRef.current], 
      { opacity: 0 })

    // Hero Image Animation
    tl.fromTo(heroImageRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    )

    // Title Animation with bounce effect
    .fromTo(titleRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "bounce.out" },
      "-=0.5"
    )

    // Description fade in and slide up
    .fromTo(descriptionRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.3"
    )

    // Buttons stagger animation
    .fromTo([loginButtonRef.current, signupButtonRef.current],
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.4,
        stagger: 0.2,
        ease: "power2.out"
      },
      "-=0.2"
    )

    // Members title scale animation
    .fromTo(membersTitleRef.current,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6 },
      "-=0.2"
    )

    // Members images stagger animation
    .fromTo(membersImagesRef.current,
      { scale: 0, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.4,
        stagger: 0.1,
        ease: "back.out(1.7)"
      },
      "-=0.3"
    )

    // Elfsight Widget fade in
    .fromTo(elfsightWidgetRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.2"
    )

    // Cards fade in and scale
    .fromTo(cardsRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8 },
      "-=0.4"
    )

    // Hover animations for buttons
    const buttons = [loginButtonRef.current, signupButtonRef.current]
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.1,
          duration: 0.3
        })
      })
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3
        })
      })
    })

    // Hover animations for member images
    membersImagesRef.current.forEach(img => {
      img.addEventListener('mouseenter', () => {
        gsap.to(img, {
          scale: 1.2,
          duration: 0.3
        })
      })
      img.addEventListener('mouseleave', () => {
        gsap.to(img, {
          scale: 1,
          duration: 0.3
        })
      })
    })

    // Cleanup function
    return () => {
      buttons.forEach(button => {
        button.removeEventListener('mouseenter', () => {})
        button.removeEventListener('mouseleave', () => {})
      })
      membersImagesRef.current.forEach(img => {
        img.removeEventListener('mouseenter', () => {})
        img.removeEventListener('mouseleave', () => {})
      })
    }
  }, [])

  return (
    <div>
      <main className="flex justify-between items-center px-28 py-16">
        <div className="space-y-8">
          <h1 ref={titleRef} className="text-6xl font-bold">KUBER</h1>
          <p ref={descriptionRef} className="text-xl text-gray-300">An investment for you</p>
          <div className="space-x-4">
            <a href="/login">
              <button 
                ref={loginButtonRef}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded"
              >
                Login
              </button>
            </a>
            <a href="/login">
              <button 
                ref={signupButtonRef}
                className="border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white px-6 py-2 rounded"
              >
                Sign Up
              </button>
            </a>
          </div>
          <div className='flex gap-5 items-center justify-center'>
            <p ref={membersTitleRef} className="text-2xl">Our Members</p>
            <div className="flex -space-x-2">
              {[p1, p2, p3, p4].map((i, index) => (
                <img
                  key={i}
                  ref={el => membersImagesRef.current[index] = el}
                  src={i}
                  alt={`Member ${i}`}
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
              ))}
            </div>
          </div>
        </div>

        <div ref={heroImageRef} className="relative w-1/2 h-[500px]">
          <img
            src={heroimg}
            alt="NFT Graphic"
            className="w-full h-full object-contain"
          />
        </div>
      </main>
      <div ref={elfsightWidgetRef}>
        <ElfsightWidget />
      </div>
      <div ref={cardsRef}>
        <Cards />
      </div>
    </div>
  )
}

export default Homepage