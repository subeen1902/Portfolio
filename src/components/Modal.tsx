import * as React from 'react';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ open, onClose, children }: ModalProps) {
  const backdropRef = React.useRef<HTMLDivElement | null>(null);

  // 배경 스크롤 잠금
  React.useEffect(() => {
    if (!open) return;

    const body = document.body;
    const prevOverflow = body.style.overflow;
    const prevPaddingRight = body.style.paddingRight;

    // 스크롤바 보정(레이아웃 점프 방지)
    const scrollbarW = window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarW > 0) {
      body.style.paddingRight = `${scrollbarW}px`;
    }
    body.style.overflow = 'hidden';
    body.classList.add('modal-open'); // iOS overscroll 제어용

    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPaddingRight;
      body.classList.remove('modal-open');
    };
  }, [open]);

  // 배경 클릭으로 닫기
  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === backdropRef.current) onClose();
  };

  // 바깥으로 스크롤/휠 전파 방지
  const stopWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  // 모바일 터치 스크롤 전파 방지
  React.useEffect(() => {
    if (!open || !backdropRef.current) return;
    const el = backdropRef.current;
    const prevent = (e: TouchEvent) => e.stopPropagation();
    el.addEventListener('touchmove', prevent, { passive: false });
    return () => el.removeEventListener('touchmove', prevent);
  }, [open]);

  if (!open) return null;

  return (
    <div
      ref={backdropRef}
      className="modal-backdrop"
      onClick={onBackdropClick}
      onWheel={stopWheel}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        onWheel={stopWheel}
      >
        {children}
      </div>
    </div>
  );
}
