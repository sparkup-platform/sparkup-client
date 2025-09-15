'use client'

import { useState } from 'react'

export default function ThemeTest() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    
    if (newTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-8 transition-colors">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">테마 테스트 페이지</h1>
          <button
            onClick={toggleTheme}
            className="bg-secondary text-foreground px-4 py-2 rounded-lg hover:opacity-80 transition-opacity"
          >
            {theme === 'light' ? '다크 모드로 변경' : '라이트 모드로 변경'}
            <div className='text-lg '></div>
          </button>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {/* 색상 팔레트 테스트 */}
          <div className="bg-card p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold mb-4">색상 팔레트</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded"></div>
                <span>Primary (메인 컬러)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-secondary rounded"></div>
                <span>Secondary</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-muted rounded"></div>
                <span>Muted</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent rounded"></div>
                <span>Accent</span>
              </div>
            </div>
          </div>

          {/* 오렌지 팔레트 테스트 */}
          <div className="bg-card p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold mb-4">오렌지 팔레트</h2>
            <div className="grid grid-cols-5 gap-2">
              <div className="text-center">
                <div className="w-full h-8 bg-orange-50 rounded mb-1"></div>
                <span className="text-xs text-muted-foreground">50</span>
              </div>
              <div className="text-center">
                <div className="w-full h-8 bg-orange-100 rounded mb-1"></div>
                <span className="text-xs text-muted-foreground">100</span>
              </div>
              <div className="text-center">
                <div className="w-full h-8 bg-orange-200 rounded mb-1"></div>
                <span className="text-xs text-muted-foreground">200</span>
              </div>
              <div className="text-center">
                <div className="w-full h-8 bg-orange-300 rounded mb-1"></div>
                <span className="text-xs text-muted-foreground">300</span>
              </div>
              <div className="text-center">
                <div className="w-full h-8 bg-orange-400 rounded mb-1"></div>
                <span className="text-xs text-muted-foreground">400</span>
              </div>
              <div className="text-center">
                <div className="w-full h-8 bg-orange-500 rounded mb-1"></div>
                <span className="text-xs text-muted-foreground">500</span>
              </div>
              <div className="text-center">
                <div className="w-full h-8 bg-orange-600 rounded mb-1"></div>
                <span className="text-xs text-muted-foreground">600</span>
              </div>
              <div className="text-center">
                <div className="w-full h-8 bg-orange-700 rounded mb-1"></div>
                <span className="text-xs text-muted-foreground">700</span>
              </div>
              <div className="text-center">
                <div className="w-full h-8 bg-orange-800 rounded mb-1"></div>
                <span className="text-xs text-muted-foreground">800</span>
              </div>
              <div className="text-center">
                <div className="w-full h-8 bg-orange-900 rounded mb-1"></div>
                <span className="text-xs text-muted-foreground">900</span>
              </div>
            </div>
          </div>

          {/* 중립색 팔레트 테스트 */}
          <div className="bg-card p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold mb-4">중립색 팔레트</h2>
            <div className="grid grid-cols-5 gap-2">
              <div className="text-center">
                <div className="w-full h-8 bg-neutral-50 rounded mb-1 border border-border"></div>
                <span className="text-xs text-muted-foreground">50</span>
              </div>
              <div className="text-center">
                <div className="w-full h-8 bg-neutral-100 rounded mb-1 border border-border"></div>
                <span className="text-xs text-muted-foreground">100</span>
              </div>
              <div className="text-center">
                <div className="w-full h-8 bg-neutral-200 rounded mb-1 border border-border"></div>
                <span className="text-xs text-muted-foreground">200</span>
              </div>
              <div className="text-center">
                <div className="w-full h-8 bg-neutral-300 rounded mb-1 border border-border"></div>
                <span className="text-xs text-muted-foreground">300</span>
              </div>
              <div className="text-center">
                <div className="w-full h-8 bg-neutral-400 rounded mb-1 border border-border"></div>
                <span className="text-xs text-muted-foreground">400</span>
              </div>
              <div className="text-center">
                <div className="w-full h-8 bg-neutral-500 rounded mb-1 border border-border"></div>
                <span className="text-xs text-muted-foreground">500</span>
              </div>
              <div className="text-center">
                <div className="w-full h-8 bg-neutral-600 rounded mb-1 border border-border"></div>
                <span className="text-xs text-muted-foreground">600</span>
              </div>
              <div className="text-center">
                <div className="w-full h-8 bg-neutral-700 rounded mb-1 border border-border"></div>
                <span className="text-xs text-muted-foreground">700</span>
              </div>
              <div className="text-center">
                <div className="w-full h-8 bg-neutral-800 rounded mb-1 border border-border"></div>
                <span className="text-xs text-muted-foreground">800</span>
              </div>
              <div className="text-center">
                <div className="w-full h-8 bg-neutral-900 rounded mb-1 border border-border"></div>
                <span className="text-xs text-muted-foreground">900</span>
              </div>
            </div>
          </div>

          {/* 의미적 색상 테스트 */}
          <div className="bg-card p-6 rounded-xl border border-border">
            <h2 className="text-2xl font-semibold mb-4">의미적 색상</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-success rounded"></div>
                <span>Success</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-warning rounded"></div>
                <span>Warning</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-danger rounded"></div>
                <span>Danger</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-info rounded"></div>
                <span>Info</span>
              </div>
            </div>
          </div>
        </div>

        {/* 버튼 테스트 */}
        <div className="mt-8 bg-card p-6 rounded-xl border border-border">
          <h2 className="text-2xl font-semibold mb-4">버튼 컴포넌트</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-80">
              Primary Button
            </button>
            <button className="bg-secondary text-foreground px-4 py-2 rounded-lg hover:opacity-80">
              Secondary Button
            </button>
            <button className="bg-success text-white px-4 py-2 rounded-lg hover:opacity-80">
              Success Button
            </button>
            <button className="bg-warning text-white px-4 py-2 rounded-lg hover:opacity-80">
              Warning Button
            </button>
            <button className="bg-danger text-white px-4 py-2 rounded-lg hover:opacity-80">
              Danger Button
            </button>
            <button className="border border-border bg-background text-foreground px-4 py-2 rounded-lg hover:bg-muted">
              Outline Button
            </button>
          </div>
        </div>

        {/* 타이포그래피 테스트 */}
        <div className="mt-8 bg-card p-6 rounded-xl border border-border">
          <h2 className="text-2xl font-semibold mb-4">타이포그래피</h2>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">Heading 1 (4xl)</h1>
            <h2 className="text-3xl font-semibold">Heading 2 (3xl)</h2>
            <h3 className="text-2xl font-medium">Heading 3 (2xl)</h3>
            <h4 className="text-xl">Heading 4 (xl)</h4>
            <h5 className="text-lg">Heading 5 (lg)</h5>
            <p className="text-base">본문 텍스트입니다. (base)</p>
            <p className="text-sm text-muted-foreground">작은 텍스트입니다. (sm)</p>
            <p className="text-xs text-muted-foreground">매우 작은 텍스트입니다. (xs)</p>
          </div>
        </div>

        {/* 폼 요소 테스트 */}
        <div className="mt-8 bg-card p-6 rounded-xl border border-border">
          <h2 className="text-2xl font-semibold mb-4">폼 요소</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">입력 필드</label>
              <input 
                type="text" 
                placeholder="텍스트를 입력하세요"
                className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">선택 박스</label>
              <select className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent">
                <option>옵션 1</option>
                <option>옵션 2</option>
                <option>옵션 3</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">텍스트 영역</label>
              <textarea 
                placeholder="메시지를 입력하세요"
                rows={4}
                className="w-full p-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}