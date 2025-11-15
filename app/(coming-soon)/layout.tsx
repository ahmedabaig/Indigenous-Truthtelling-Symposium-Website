export default function ComingSoonLayout({ children }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<body>
				{children}
			</body>
		</html>
	);
}
