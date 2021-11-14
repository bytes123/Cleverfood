import React from 'react'

export default function FruitsBanner() {
    return (
        <div className="fruits_banner container">
            <div className="fruits_banner-wrapper">
                <div className="fruits_banner-list row">
                    <div className="fruits_banner-item col-3">
                        <div className="fruits_banner-img-wrapper">
                            <img src="https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2019/05/banner29.jpg"/>
                        </div>
                    </div>
                    <div className="fruits_banner-item col-9">
                        <div className="fruits_banner-list row">
                            <div className="fruits_banner-item col-4">
                                <div className="fruits_banner-img-wrapper">
                                    <img src="https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2019/05/banner30.jpg"/>
                                </div>
                            </div>
                            <div className="fruits_banner-item col-4">
                                <div className="fruits_banner-img-wrapper">
                                    <img src="https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2019/05/banner31.jpg"/>
                                </div>
                            </div>
                            <div className="fruits_banner-item col-4">
                                <div className="fruits_banner-img-wrapper">
                                    <img src="https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2019/05/banner32.jpg"/>
                                </div>
                            </div>
                        </div>
                        <div className="fruits_banner-list row pt-1-5">
                            <div className="fruits_banner-item col-4 flex align-items-center justify-content-center">
                                <div className="fruits_banner-special">
                                    <p className="fruits_banner-percent-label">
                                        100%
                                    </p>
                                    <p className="fruits_banner-natural-label">
                                        NATURAL
                                    </p>
                                </div>
                            </div>
                            <div className="fruits_banner-item col-8">
                                <div className="fruits_banner-img-wrapper">
                                    <img src="https://mauweb.monamedia.net/cleverfood/wp-content/uploads/2019/05/banner33.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
