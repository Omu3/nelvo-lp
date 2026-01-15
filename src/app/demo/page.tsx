'use client';

import { useEffect, useState, Suspense, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { getLocalizedPath } from '@/lib/url';

type ScreenKey = 'members' | 'communities' | 'today' | 'analytics' | 'settings';

// 画像のベースパス（public/demo/{lang}/{imageName}）
const IMAGE_BASE_PATH = '/demo';

const screenList: { key: ScreenKey; imageName: string }[] = [
    { key: 'members', imageName: 'members.png' },
    { key: 'communities', imageName: 'communities.png' },
    { key: 'today', imageName: 'today.png' },
    { key: 'analytics', imageName: 'analytics.png' },
    { key: 'settings', imageName: 'settings.png' },
];

function DemoContent() {
    const { t, language, setLanguage } = useLanguage();
    const searchParams = useSearchParams();
    const router = useRouter();
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const [currentLang, setCurrentLang] = useState<'ja' | 'en'>(language);
    const [isZoomed, setIsZoomed] = useState(false);
    const errorLoggedRef = useRef<Set<string>>(new Set());
    const modalImageRef = useRef<HTMLImageElement>(null);

    // クエリパラメータから言語を取得（lang=en のときだけ en、それ以外は ja）
    useEffect(() => {
        const langParam = searchParams.get('lang');
        // lang=en のときだけ en、それ以外は ja
        const validLang = langParam === 'en' ? 'en' : 'ja';
        
        setCurrentLang(validLang);
        setLanguage(validLang); // LanguageContextも更新
        // Cookieを更新
        document.cookie = `language=${validLang}; path=/; max-age=31536000`;
    }, [searchParams, setLanguage]);

    // 画像パスを生成（絶対パス、先頭スラッシュ付き）
    // public/demo/{lang}/{imageName} を参照
    // lang は query の lang=en のときだけ en、それ以外は ja
    const getImagePath = (imageName: string): string => {
        // searchParamsから直接取得して確実に /demo/{lang}/{imageName} を返す
        const langParam = searchParams.get('lang');
        const lang = langParam === 'en' ? 'en' : 'ja';
        const path = `${IMAGE_BASE_PATH}/${lang}/${imageName}`;
        
        // 開発時のみデバッグログ（クライアントサイド）
        if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
            console.log('[Demo] Image path:', path);
        }
        
        return path;
    };

    const openModal = (index: number) => {
        setSelectedImageIndex(index);
        setIsZoomed(false);
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
        setIsZoomed(false);
    };

    const toggleZoom = () => {
        setIsZoomed(!isZoomed);
    };

    const navigateImage = (direction: 'prev' | 'next') => {
        if (selectedImageIndex === null) return;
        const total = screenList.length;
        if (direction === 'prev') {
            setSelectedImageIndex((selectedImageIndex - 1 + total) % total);
        } else {
            setSelectedImageIndex((selectedImageIndex + 1) % total);
        }
    };

    // キーボードでESCキーを押したときにモーダルを閉じる、左右キーで前後切り替え、Zでズーム
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'ArrowLeft' && selectedImageIndex !== null && !isZoomed) {
                const total = screenList.length;
                setSelectedImageIndex((selectedImageIndex - 1 + total) % total);
            } else if (e.key === 'ArrowRight' && selectedImageIndex !== null && !isZoomed) {
                const total = screenList.length;
                setSelectedImageIndex((selectedImageIndex + 1) % total);
            } else if (e.key === 'z' || e.key === 'Z') {
                if (selectedImageIndex !== null) {
                    toggleZoom();
                }
            }
        };
        if (selectedImageIndex !== null) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [selectedImageIndex, isZoomed]);

    // モーダルが開いたらフォーカスをモーダルに移す
    useEffect(() => {
        if (selectedImageIndex !== null && modalImageRef.current) {
            modalImageRef.current.focus();
        }
    }, [selectedImageIndex]);

    return (
        <>
            <Header />
            <main className="min-h-screen bg-white pt-24 pb-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
                    {/* Back Button */}
                    <div className="mb-6">
                        <Link
                            href={getLocalizedPath('/', currentLang)}
                            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            {currentLang === 'ja' ? '戻る' : 'Back'}
                        </Link>
                    </div>
                    
                    {/* Header */}
                    <div className="mb-6 md:mb-8 text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-3">
                            {t.demoPage.title}
                        </h1>
                        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-2">
                            {t.demoPage.subtitle}
                        </p>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                            {t.demoPage.disclaimer}
                        </p>
                    </div>

                    {/* Language Tabs */}
                    <div className="flex justify-center mb-4">
                        <div className="inline-flex rounded-lg border border-gray-200 bg-white p-1">
                            <button
                                onClick={() => {
                                    const newLang = 'ja';
                                    setCurrentLang(newLang);
                                    setLanguage(newLang);
                                    document.cookie = `language=${newLang}; path=/; max-age=31536000`;
                                    router.push('/demo?lang=ja');
                                }}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                    currentLang === 'ja'
                                        ? 'bg-[#214BCE] text-white'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                {currentLang === 'en' ? 'JP' : '日本語'}
                            </button>
                            <button
                                onClick={() => {
                                    const newLang = 'en';
                                    setCurrentLang(newLang);
                                    setLanguage(newLang);
                                    document.cookie = `language=${newLang}; path=/; max-age=31536000`;
                                    router.push('/demo?lang=en');
                                }}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                    currentLang === 'en'
                                        ? 'bg-[#214BCE] text-white'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                {currentLang === 'ja' ? 'EN' : 'English'}
                            </button>
                        </div>
                    </div>

                    {/* Screens Grid - 上段3、下段2、中央寄せ */}
                    <div className="flex flex-col items-center gap-4 md:gap-6">
                        {/* 上段3枚 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-6xl">
                            {screenList.slice(0, 3).map((screen, index) => {
                                const imagePath = getImagePath(screen.imageName);
                                const screenLabel = t.demoPage.screens[screen.key];

                                return (
                                    <div
                                        key={screen.key}
                                        id={screen.key}
                                        className="group cursor-pointer"
                                        onClick={() => openModal(index)}
                                    >
                                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 overflow-hidden relative">
                                        {/* カテゴリタグ（右上） */}
                                        <div className="absolute top-3 right-3 z-10">
                                            <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-md text-xs font-medium text-gray-700 shadow-sm">
                                                {screenLabel}
                                            </span>
                                        </div>
                                        
                                        {/* Window Frame */}
                                        <div className="bg-gray-50 border-b border-gray-200 px-3 py-1.5 flex items-center gap-2">
                                            <div className="flex gap-1.5">
                                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                            </div>
                                            <div className="flex-1" />
                                        </div>

                                        {/* Image Container - 余白削減、画像領域拡大 */}
                                        <div className="relative bg-gray-50 overflow-hidden" style={{ minHeight: '320px', height: 'auto' }}>
                                            <img
                                                src={imagePath}
                                                alt={screenLabel}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                loading="lazy"
                                                style={{ minHeight: '320px', objectFit: 'cover' }}
                                                onError={(e) => {
                                                    // エラーログを一度だけ出力
                                                    if (!errorLoggedRef.current.has(imagePath)) {
                                                        console.error('[Demo] Image load error:', imagePath);
                                                        errorLoggedRef.current.add(imagePath);
                                                    }
                                                    const target = e.target as HTMLImageElement;
                                                    target.style.display = 'none';
                                                    const parent = target.parentElement;
                                                    if (parent) {
                                                        const errorMsg = currentLang === 'ja' 
                                                            ? '画像が見つかりません' 
                                                            : 'Image not found';
                                                        parent.innerHTML = `
                                                            <div class="w-full h-full flex items-center justify-center">
                                                                <div class="text-center p-8">
                                                                    <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center">
                                                                        <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                        </svg>
                                                                    </div>
                                                                    <p class="text-gray-400 text-sm">${screenLabel}</p>
                                                                    <p class="text-gray-300 text-xs mt-1">${errorMsg}</p>
                                                                </div>
                                                            </div>
                                                        `;
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                );
                            })}
                        </div>
                        {/* 下段2枚 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-4xl">
                            {screenList.slice(3, 5).map((screen, index) => {
                                const imagePath = getImagePath(screen.imageName);
                                const screenLabel = t.demoPage.screens[screen.key];

                                return (
                                    <div
                                        key={screen.key}
                                        id={screen.key}
                                        className="group cursor-pointer"
                                        onClick={() => openModal(index + 3)}
                                    >
                                        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 overflow-hidden relative">
                                            {/* カテゴリタグ（右上） */}
                                            <div className="absolute top-3 right-3 z-10">
                                                <span className="px-2 py-1 bg-white/90 backdrop-blur-sm rounded-md text-xs font-medium text-gray-700 shadow-sm">
                                                    {screenLabel}
                                                </span>
                                            </div>
                                            
                                            {/* Window Frame */}
                                            <div className="bg-gray-50 border-b border-gray-200 px-3 py-1.5 flex items-center gap-2">
                                                <div className="flex gap-1.5">
                                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                                </div>
                                                <div className="flex-1" />
                                            </div>

                                            {/* Image Container - 余白削減、画像領域拡大 */}
                                            <div className="relative bg-gray-50 overflow-hidden" style={{ minHeight: '320px', height: 'auto' }}>
                                                <img
                                                    src={imagePath}
                                                    alt={screenLabel}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                    loading="lazy"
                                                    style={{ minHeight: '320px', objectFit: 'cover' }}
                                                    onError={(e) => {
                                                        // エラーログを一度だけ出力
                                                        if (!errorLoggedRef.current.has(imagePath)) {
                                                            console.error('[Demo] Image load error:', imagePath);
                                                            errorLoggedRef.current.add(imagePath);
                                                        }
                                                        const target = e.target as HTMLImageElement;
                                                        target.style.display = 'none';
                                                        const parent = target.parentElement;
                                                        if (parent) {
                                                            const errorMsg = currentLang === 'ja' 
                                                                ? '画像が見つかりません' 
                                                                : 'Image not found';
                                                            parent.innerHTML = `
                                                                <div class="w-full h-full flex items-center justify-center">
                                                                    <div class="text-center p-8">
                                                                        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-50 flex items-center justify-center">
                                                                            <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                            </svg>
                                                                        </div>
                                                                        <p class="text-gray-400 text-sm">${screenLabel}</p>
                                                                        <p class="text-gray-300 text-xs mt-1">${errorMsg}</p>
                                                                    </div>
                                                                </div>
                                                            `;
                                                        }
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Modal with Navigation */}
                {selectedImageIndex !== null && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        onClick={closeModal}
                    >
                        <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            
                            {/* Previous Button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (!isZoomed) {
                                        navigateImage('prev');
                                    }
                                }}
                                className={`absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors ${isZoomed ? 'opacity-50 cursor-not-allowed' : ''}`}
                                aria-label="Previous"
                                disabled={isZoomed}
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            
                            {/* Next Button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (!isZoomed) {
                                        navigateImage('next');
                                    }
                                }}
                                className={`absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors ${isZoomed ? 'opacity-50 cursor-not-allowed' : ''}`}
                                aria-label="Next"
                                disabled={isZoomed}
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                            
                            {/* Zoom Button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleZoom();
                                }}
                                className="absolute top-4 left-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                                aria-label={isZoomed ? 'Zoom out' : 'Zoom in'}
                            >
                                {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
                            </button>
                            
                            <div className="relative w-full h-full max-w-6xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col" onClick={(e) => e.stopPropagation()}>
                                {/* モーダルヘッダー（タイトル + インジケータ） */}
                                {selectedImageIndex !== null && (
                                    <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {t.demoPage.screens[screenList[selectedImageIndex].key]}
                                        </h3>
                                        <span className="text-sm text-gray-500">
                                            {selectedImageIndex + 1} {t.demoPage.modal.of} {screenList.length}
                                        </span>
                                    </div>
                                )}
                                
                                {/* 画像コンテナ */}
                                <div className={`relative flex-1 flex items-center justify-center ${isZoomed ? 'overflow-auto' : 'overflow-hidden'} p-4`}>
                                    {selectedImageIndex !== null && (
                                        <img
                                            ref={modalImageRef}
                                            src={getImagePath(screenList[selectedImageIndex].imageName)}
                                            alt={t.demoPage.screens[screenList[selectedImageIndex].key]}
                                            className={isZoomed ? 'object-contain cursor-zoom-out' : 'max-w-full max-h-full object-contain cursor-zoom-in'}
                                            style={isZoomed ? { width: '200%', height: 'auto' } : {}}
                                            tabIndex={0}
                                            onClick={toggleZoom}
                                            onError={(e) => {
                                                const modalImagePath = getImagePath(screenList[selectedImageIndex].imageName);
                                                // エラーログを一度だけ出力
                                                if (!errorLoggedRef.current.has(modalImagePath)) {
                                                    console.error('[Demo] Modal image load error:', modalImagePath);
                                                    errorLoggedRef.current.add(modalImagePath);
                                                }
                                                const target = e.target as HTMLImageElement;
                                                target.style.display = 'none';
                                                const parent = target.parentElement;
                                                if (parent) {
                                                    const errorMsg = currentLang === 'ja' 
                                                        ? '画像が見つかりません' 
                                                        : 'Image not found';
                                                    parent.innerHTML = `
                                                        <div class="w-full h-full flex items-center justify-center">
                                                            <div class="text-center p-8">
                                                                <p class="text-gray-400 text-sm">${errorMsg}</p>
                                                            </div>
                                                        </div>
                                                    `;
                                                }
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}

export default function DemoPage() {
    return (
        <LanguageProvider initialLanguage="ja">
            <Suspense fallback={
                <div className="min-h-screen bg-white flex items-center justify-center">
                    <div className="text-gray-500">Loading...</div>
                </div>
            }>
                <DemoContent />
            </Suspense>
        </LanguageProvider>
    );
}
