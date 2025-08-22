// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    
    // 모바일 네비게이션 토글
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // FAQ 아코디언 기능
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', function() {
            // 다른 모든 FAQ 아이템 닫기
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // 현재 아이템 토글
            item.classList.toggle('active');
        });
    });
    
    // 스크롤 애니메이션
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    // 스크롤 애니메이션을 적용할 요소들
    const scrollElements = document.querySelectorAll('.section-header, .hero-content, .about-content, .speakers-grid, .tickets-grid, .faq-list');
    
    scrollElements.forEach(el => {
        el.classList.add('scroll-reveal');
        observer.observe(el);
    });
    
    // 부드러운 스크롤 (네비게이션 링크)
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100; // 네비게이션 높이만큼 조정
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // 모바일에서 메뉴 닫기
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            }
        });
    });
    
    // 네비게이션 스크롤 효과
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 스크롤 방향에 따른 네비게이션 숨김/표시
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // 아래로 스크롤
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // 위로 스크롤
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
        
        // 스크롤 위치에 따른 네비게이션 배경 투명도 조정
        if (scrollTop > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.7)';
        }
    });
    
    // 이미지 갤러리 슬라이더 (Why Attend 섹션)
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentGalleryIndex = 0;
    
    function showGalleryItem(index) {
        galleryItems.forEach((item, i) => {
            if (i === index) {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            } else {
                item.style.opacity = '0.5';
                item.style.transform = 'scale(0.9)';
            }
        });
    }
    
    // 갤러리 자동 슬라이드 (선택사항)
    if (galleryItems.length > 0) {
        setInterval(() => {
            currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
            showGalleryItem(currentGalleryIndex);
        }, 3000);
    }
    
    // 티켓 카드 호버 효과
    const ticketCards = document.querySelectorAll('.ticket-card');
    
    ticketCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // 스피커 카드 호버 효과
    const speakerCards = document.querySelectorAll('.speaker-card');
    
    speakerCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 버튼 클릭 효과
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // 리플 효과 생성
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // 프로그레스 바 애니메이션
    const progressFill = document.querySelector('.progress-fill');
    const progressBtns = document.querySelectorAll('.progress-btn');
    let progressValue = 48; // 초기값
    
    progressBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.classList.contains('prev')) {
                progressValue = Math.max(0, progressValue - 10);
            } else {
                progressValue = Math.min(100, progressValue + 10);
            }
            
            progressFill.style.width = progressValue + '%';
        });
    });
    
    // 폼 검증 (티켓 구매 버튼 클릭 시)
    const ticketButtons = document.querySelectorAll('.ticket-card .btn');
    
    ticketButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 실제 구현에서는 결제 페이지로 이동하거나 모달을 띄움
            const ticketType = this.closest('.ticket-card').querySelector('h3').textContent;
            alert(`${ticketType} 구매 페이지로 이동합니다.`);
            
            // 예시: 결제 페이지로 이동
            // window.location.href = `/purchase?type=${ticketType.toLowerCase().replace(' ', '-')}`;
        });
    });
    
    // 로딩 애니메이션
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Hero 섹션 애니메이션
        const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-buttons');
        
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('fade-in-up');
            }, index * 200);
        });
    });
    
    // 반응형 이미지 지연 로딩
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // 터치 제스처 지원 (모바일)
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // 왼쪽으로 스와이프
                console.log('Left swipe');
            } else {
                // 오른쪽으로 스와이프
                console.log('Right swipe');
            }
        }
    }
    
    // 키보드 접근성
    document.addEventListener('keydown', function(e) {
        // ESC 키로 모바일 메뉴 닫기
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
        
        // Tab 키로 포커스 관리
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    // 마우스 사용 시 키보드 네비게이션 스타일 제거
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // 성능 최적화: 스크롤 이벤트 쓰로틀링
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }
    
    // 스크롤 이벤트 최적화
    const throttledScrollHandler = throttle(function() {
        // 스크롤 관련 로직
    }, 16); // 약 60fps
    
    window.addEventListener('scroll', throttledScrollHandler);
    
    // 에러 처리
    window.addEventListener('error', function(e) {
        console.error('JavaScript Error:', e.error);
    });
    
    // 콘솔 로그 (개발용)
    console.log('SPDC 2025 웹사이트가 성공적으로 로드되었습니다! 🎉');
    
});

// CSS 애니메이션을 위한 추가 스타일
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .keyboard-navigation *:focus {
        outline: 2px solid var(--primary-color);
        outline-offset: 2px;
    }
    
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        padding: 1rem;
        border-radius: 0 0 20px 20px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }
    
    .nav-toggle.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    body.loaded .hero-content {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hero-content {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease;
    }
    
    .lazy {
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    .lazy.loaded {
        opacity: 1;
    }
`;

document.head.appendChild(style);
