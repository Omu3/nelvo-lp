/**
 * 言語対応URL生成ヘルパー
 * 現在の言語に基づいて適切なURLを生成する
 */

type Language = 'ja' | 'en';

/**
 * 言語に応じたURLを生成
 * @param path - パス（例: '/features', '/pricing'）
 * @param language - 言語（'ja' | 'en'）
 * @returns 言語対応URL（例: '/features' または '/en/features'）
 */
export function getLocalizedPath(path: string, language: Language): string {
  // 既に言語プレフィックスが含まれている場合はそのまま返す
  if (path.startsWith('/en/')) {
    return path;
  }
  
  // アンカーリンク（#で始まる）はそのまま返す
  if (path.startsWith('#')) {
    return path;
  }
  
  // 外部URLはそのまま返す
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // ルートパスは言語に応じて返す
  if (path === '/') {
    return language === 'en' ? '/en' : '/';
  }
  
  // 英語の場合は /en プレフィックスを追加
  if (language === 'en') {
    return `/en${path}`;
  }
  
  // 日本語の場合はそのまま
  return path;
}

/**
 * 現在のパスから言語を判定
 * @param pathname - パス名（例: '/en/features'）
 * @returns 言語（'ja' | 'en'）
 */
export function getLanguageFromPath(pathname: string): Language {
  if (pathname.startsWith('/en')) {
    return 'en';
  }
  return 'ja';
}

/**
 * 言語プレフィックスを削除してベースパスを取得
 * @param pathname - パス名（例: '/en/features'）
 * @returns ベースパス（例: '/features'）
 */
export function getBasePath(pathname: string): string {
  if (pathname.startsWith('/en')) {
    return pathname.replace('/en', '') || '/';
  }
  return pathname;
}
