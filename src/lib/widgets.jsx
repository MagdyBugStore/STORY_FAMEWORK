import React from 'react';
import Phone from './mobile/Phone.jsx';

function cx(...parts) {
  return parts.filter(Boolean).join(' ');
}

export function Box({ as = 'div', className, style, children, ...rest }) {
  return React.createElement(as, { className, style, ...rest }, children);
}

export function Content({ className, children, ...rest }) {
  return (
    <Box className={cx('content', className)} {...rest}>
      {children}
    </Box>
  );
}

export function Row({
  className,
  children,
  align = 'center',
  justify,
  wrap = false,
  gap,
  style,
  ...rest
}) {
  const alignClass =
    align === 'start' ? 'items-start' : align === 'end' ? 'items-end' : 'items-center';
  const justifyClass = justify
    ? justify === 'start'
      ? 'justify-start'
      : justify === 'end'
        ? 'justify-end'
        : justify === 'between'
          ? 'justify-between'
          : justify === 'around'
            ? 'justify-around'
            : justify === 'evenly'
              ? 'justify-evenly'
              : 'justify-center'
    : '';

  return (
    <Box
      className={cx('flex flex-row', alignClass, justifyClass, wrap ? 'flex-wrap' : '', className)}
      style={gap != null ? { ...style, gap } : style}
      {...rest}
    >
      {children}
    </Box>
  );
}

export function Column({
  className,
  children,
  align = 'stretch',
  justify,
  gap,
  style,
  ...rest
}) {
  const alignClass =
    align === 'start'
      ? 'items-start'
      : align === 'end'
        ? 'items-end'
        : align === 'center'
          ? 'items-center'
          : 'items-stretch';
  const justifyClass = justify
    ? justify === 'start'
      ? 'justify-start'
      : justify === 'end'
        ? 'justify-end'
        : justify === 'between'
          ? 'justify-between'
          : justify === 'around'
            ? 'justify-around'
            : justify === 'evenly'
              ? 'justify-evenly'
              : 'justify-center'
    : '';

  return (
    <Box
      className={cx('flex flex-col', alignClass, justifyClass, className)}
      style={gap != null ? { ...style, gap } : style}
      {...rest}
    >
      {children}
    </Box>
  );
}

export function Stack({ className, children, ...rest }) {
  return (
    <Box className={cx('relative', className)} {...rest}>
      {children}
    </Box>
  );
}

export function Positioned({ className, children, style, top, right, bottom, left, ...rest }) {
  return (
    <Box
      className={cx('absolute', className)}
      style={{ ...style, top, right, bottom, left }}
      {...rest}
    >
      {children}
    </Box>
  );
}

export function Spacer({ size = 12, vertical = true }) {
  const style = vertical ? { height: size } : { width: size };
  return <Box style={style} aria-hidden="true" />;
}

export function Divider({ className, ...rest }) {
  return <Box as="hr" className={cx('border-0 border-t border-[var(--g200)]', className)} {...rest} />;
}

export function TopNav({ title, left, right, className, ...rest }) {
  return (
    <Box className={cx('topnav', className)} {...rest}>
      {left ?? <IconButton />}
      <Box className="topnav-title">{title}</Box>
      {right ?? <Box className="w-[32px]" />}
    </Box>
  );
}

export function IconButton({ round = false, className, ...rest }) {
  return <Box className={cx('tn-btn', round ? 'round' : '', className)} {...rest} />;
}

export function Label({ className, children, ...rest }) {
  return (
    <Box className={cx('inp-lbl', className)} {...rest}>
      {children}
    </Box>
  );
}

export function Field({ className, children, ...rest }) {
  return (
    <Box className={cx('inp-field', className)} {...rest}>
      {children}
    </Box>
  );
}

export function Group({ className, children, ...rest }) {
  return (
    <Box className={cx('inp-group', className)} {...rest}>
      {children}
    </Box>
  );
}

export function Button({ variant = 'cta', className, children, as = 'button', ...rest }) {
  const base =
    variant === 'primary'
      ? 'btn-primary'
      : variant === 'ghost'
        ? 'btn-ghost'
        : variant === 'danger'
          ? 'btn-danger'
          : 'btn-cta';

  const isButton = as === 'button';

  return React.createElement(
    as,
    { className: cx(base, className), type: isButton ? 'button' : undefined, ...rest },
    children,
  );
}

export function Text({ as = 'div', className, children, ...rest }) {
  return React.createElement(as, { className, ...rest }, children);
}

export function SkeletonLine({ className, ...rest }) {
  return <Box className={cx('tl', className)} {...rest} />;
}

export function SkeletonBlock({ className, ...rest }) {
  return <Box className={cx('tl', className)} {...rest} />;
}

export function MobileApp({ showStatusBar = true, className, children, ...rest }) {
  return (
    <Phone showStatusBar={showStatusBar} className={cx('wf-mobileapp', className)} {...rest}>
      {children}
    </Phone>
  );
}

export function WebApp({ className, children, ...rest }) {
  return (
    <Box className={cx('wf-webapp', className)} {...rest}>
      {children}
    </Box>
  );
}
