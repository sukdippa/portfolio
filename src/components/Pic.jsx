'use client';

import { useEffect, useState } from 'react';

const Pic = ({ image, text, description, textPosition = 'bottom', width, height }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const altText = text ? `Artwork: ${text}` : 'Gallery image';

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsModalOpen(false);
            }
        };

        if (isModalOpen) {
            document.addEventListener('keydown', onKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.style.overflow = '';
        };
    }, [isModalOpen]);

    const imageElement = (
        <img
            src={image}
            alt={altText}
            width={width}
            height={height}
            className="cursor-pointer"
            onClick={() => setIsModalOpen(true)}
        />
    );

    return (
        <>
            {textPosition === 'right' ? (
                <div className="grid grid-cols-2 gap-4 items-start">
                    <img
                        src={image}
                        alt={altText}
                        className="w-full cursor-zoom-in"
                        onClick={() => setIsModalOpen(true)}
                    />
                    <div className="flex flex-col p-8">
                        <p className="my-2">{text}</p>
                        <p className="text-sm text-gray-500">{description}</p>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col h-auto w-auto max-h-full">
                    {imageElement}
                    <p className="my-2">{text}</p>
                    <p className="text-sm text-gray-500">{description}</p>
                </div>
            )}

            {isModalOpen && (
                <div
                    className="fixed inset-0 z-[100] bg-black/80 p-4 flex items-center justify-center"
                    onClick={() => setIsModalOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label={altText}
                >
                    <button
                        type="button"
                        className="absolute top-4 right-4 text-white text-3xl leading-none"
                        onClick={() => setIsModalOpen(false)}
                        aria-label="Close image modal"
                    >
                        ×
                    </button>
                    <img
                        src={image}
                        alt={altText}
                        className="max-h-[90vh] max-w-[90vw] object-contain"
                        onClick={(event) => event.stopPropagation()}
                    />
                </div>
            )}
        </>
    );
};

export default Pic;