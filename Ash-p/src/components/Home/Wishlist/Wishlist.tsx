import React from 'react';
import './Wishlist.scss';
import { wishListContent } from './wishListContent';
import { wishlistCardContent } from './wishlistCardContent';
import WishlistCard from './WishlistCard/WishlistCard';
import { WishListContent } from './types';

const Wishlist: React.FC = () => {
    return (
        <div className="wishlist-section">
            <div className="wishlist-header-row">
                <div className="wishlist-header-title">
                    <h2>
                        <span className="wishlist-main">
                            {wishListContent.headingMain}
                            <div className="wishlist-heading-sub">
                                {wishListContent.headingSub} <span className="wishlist-highlight-wrapper"><span className="wishlist-highlight-bg"></span><span className="wishlist-highlight">{wishListContent.highlight}</span></span>
                            </div>
                        </span>
                    </h2>
                </div>
                <div className="wishlist-header-desc">
                    <p className='desc-p'>{wishListContent.description1}</p>
                    <p className='desc-p1'>{wishListContent.description2}</p>
                </div>
            </div>
            <div className="wishlist-cards">
                <h3 className="wishlist-section-title">{wishListContent.sectionTitles.wishingFor}</h3>
                <WishlistCard
                    type="compatible"
                    label={wishListContent.categories.wishingFor.label}
                    labelIcon={wishListContent.categories.wishingFor.labelIcon}
                    labelColor={wishListContent.categories.wishingFor.labelColor}
                    title={wishListContent.categories.wishingFor.title}
                    icon={wishListContent.categories.wishingFor.icon}
                    fiction={wishlistCardContent.wishingFor.fiction}
                    nonfiction={wishlistCardContent.wishingFor.nonfiction}
                    fictionTitle={wishListContent.fictionTitle}
                    nonfictionTitle={wishListContent.nonfictionTitle}
                />
                <h3 className="wishlist-section-title">{wishListContent.sectionTitles.notWishingFor}</h3>
                <WishlistCard
                    type="incompatible"
                    label={wishListContent.categories.notWishingFor.label}
                    labelIcon={wishListContent.categories.notWishingFor.labelIcon}
                    labelColor={wishListContent.categories.notWishingFor.labelColor}
                    title={wishListContent.categories.notWishingFor.title}
                    icon={wishListContent.categories.notWishingFor.icon}
                    allGenres={wishlistCardContent.notWishingFor["All genres"]}
                    description={wishListContent.notWishingForDescription}
                    allGenresLabel={wishListContent.allGenresLabel}
                />
            </div>
        </div>
    );
};

export default Wishlist; 