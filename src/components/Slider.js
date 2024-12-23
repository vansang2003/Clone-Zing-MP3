import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getArrSlider } from '../ultis/fn'
import * as actions from "../store/actions"
import { useNavigate } from 'react-router-dom'

const Slider = () => {

    const { banner } = useSelector(state => state.app)
    // console.log(banner)
    const dispath = useDispatch()
    const navigate = useNavigate()

    // ainimation for banner
    useEffect(() => {
        const sliderEls = document.getElementsByClassName('slider-item')
        let min = 0
        let max = 2
        const intervalId = setInterval(() => {
            const list = getArrSlider(min, max, sliderEls.length - 1)
            for (let i = 0; i < sliderEls.length; i++) {
                // Delete classnames (css)
                sliderEls[i]?.classList?.remove('animate-slide-right', 'order-last', 'z-20')
                sliderEls[i]?.classList?.remove('animate-slide-left', 'order-first', 'z-10')
                sliderEls[i]?.classList?.remove('animate-slide-left2', 'order-2', 'z-10')

                // Hide or Show images
                if (list.some(item => item === i)) {
                    sliderEls[i].style.cssText = `display: block`
                } else {
                    sliderEls[i].style.cssText = `display: none`
                }
            }
            // Add animation by adding classnames
            list.forEach(item => {
                if (item === max) {
                    sliderEls[item]?.classList?.add('animate-slide-right', 'order-last', 'z-20')
                } else if (item === min) {
                    sliderEls[item]?.classList?.add('animate-slide-left', 'order-first', 'z-10')
                } else {
                    sliderEls[item]?.classList?.add('animate-slide-left2', 'order-2', 'z-10')
                }
            })
            min = (min === sliderEls.length - 1) ? 0 : min + 1
            max = (max === sliderEls.length - 1) ? 0 : max + 1
        }, 3000)
        return () => {
            intervalId && clearInterval(intervalId)
        }
    }, [])

    const handleClickBanner = (item) => {
        if (item?.type === 1) {
            dispath(actions.setCurSongId(item.encodeId))
            dispath(actions.play(true))
        } else if (item?.type === 4) {
            // console.log(item)
            const albumPath = item?.link?.split('.')[0]
            console.log( albumPath)
            navigate(`/album${albumPath}`)
        }
    }

    return (
        <div className='w-full overflow-hidden px-[59px]'>
            <div className='flex w-full gap-8 pt-8'>
                {banner?.map((item, index) => (
                    <img
                        key={item.encodeId}
                        alt='Banner'
                        src={item.banner}
                        onClick={() => handleClickBanner(item)}
                        className={`slider-item flex-1 object-contain w-[30%] rounded-lg cursor-pointer ${index <= 2 ? 'block' : 'hidden'}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Slider
