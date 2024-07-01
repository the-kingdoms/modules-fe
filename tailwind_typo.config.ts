const tailwindTypoConfig = {
    plugins: [
        ({ addUtilities }) => {
            addUtilities({
                '.head-01-regular': {
                    fontFamily: 'SCoreDream',
                    fontWeight: '200',
                    fontSize: '1rem',
                    lineHeight: '1.25rem',
                    letterSpacing: '-0.031rem',
                },
                '.head-01-bold': {
                    fontFamily: 'SCoreDream',
                    fontWeight: '600',
                    fontSize: '1rem',
                    lineHeight: '1.25rem',
                    letterSpacing: '-0.031rem',
                },
                '.head-02-regular': {
                    fontFamily: 'SCoreDream',
                    fontWeight: '200',
                    fontSize: '1.25em',
                    lineHeight: '1.625rem',
                    letterSpacing: '-0.031rem',
                },
                '.head-02-bold': {
                    fontFamily: 'SCoreDream',
                    fontWeight: '600',
                    fontSize: '1.25rem',
                    lineHeight: '1.625rem',
                    letterSpacing: '-0.031rem',
                },
                '.head-03-regular': {
                    fontFamily: 'SCoreDream',
                    fontWeight: '200',
                    fontSize: '1.5rem',
                    lineHeight: '2rem',
                    letterSpacing: '-0.016rem',
                },
                '.head-03-bold': {
                    fontFamily: 'SCoreDream',
                    fontWeight: '600',
                    fontSize: '1.5rem',
                    lineHeight: '2rem',
                    letterSpacing: '-0.016rem',
                },
                '.head-04-regular': {
                    fontFamily: 'SCoreDream',
                    fontWeight: '200',
                    fontSize: '1.75rem',
                    lineHeight: '2.25rem',
                    letterSpacing: '-0.016rem',
                },
                '.head-04-bold': {
                    fontFamily: 'SCoreDream',
                    fontWeight: '600',
                    fontSize: '1.75rem',
                    lineHeight: '2.25rem',
                    letterSpacing: '-0.016rem',
                },
                '.head-05-regular': {
                    fontFamily: 'SCoreDream',
                    fontWeight: '200',
                    fontSize: '2rem',
                    lineHeight: '2.5rem',
                    letterSpacing: '0rem',
                },
                '.head-05-bold': {
                    fontFamily: 'SCoreDream',
                    fontWeight: '600',
                    fontSize: '2rem',
                    lineHeight: '2.25rem',
                    letterSpacing: '0rem',
                },
            });
        },
    ],
};

export default tailwindTypoConfig;
