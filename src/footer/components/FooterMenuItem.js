import React from 'react'
export default function FooterMenuItem(
    {
    item,
    index,
    listLength
    }) {
    const {id,header,footerLogo,p,a,main,span} = item
    const styles = {
        color: "var(--primary-text-color)"
    };

    return (
        <div className={`footer_section-item col-${Math.floor(12/listLength)}`}
                        key={index}
                        >
                            {footerLogo && 
                                <div className="section_item-logo-wrapper">
                                    <img src={footerLogo} alt="" />
                                </div>
                            }
                            {header && 
                                <div className="section_item-heading">
                                    <h3 className="section_item-header" style={{fontWeight: "700"}}>
                                        {header}
                                    </h3>
                                </div>
                            }
                            {p && p.map((pItem,index) => {
                                return (
                                    <div className="section_item-detail-wrapper"
                                    key={index}>
                                        <p className="section_item-paragraph">
                                            {pItem}
                                        </p>
                                    </div>
                                )
                            })}
                            {a && a.map((aItem,index) => {
                                return (
                                    <div className="section_item-detail-wrapper"
                                    key={index}
                                    >
                                        <a href="" className={main && index == 0 ? "section_item-link text-primary" : "section_item-link"}>
                                            {aItem}
                                        </a>
                                    </div>
                                )
                            })}
                            {span && span.map((spanItem,index) => {
                                return (
                                    <div className="section_item-detail-wrapper"
                                    key={index}>
                                        <span className="section_item-span">
                                            {spanItem}
                                        </span>
                                    </div>
                                )
                            })}
        </div>
    )
}
