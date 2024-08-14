// Card.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from '../Card';
import data from "../../../data.json"; // Импортируйте реальный файл данных

describe('Card Component', () => {
    test('renders the Card component', () => {
        render(<Card />);

        // Проверяем наличие изображений и заголовков для каждого элемента из data.json
        data.forEach(photo => {
            const imgElement = screen.getByAltText(photo.title);
            expect(imgElement).toBeInTheDocument();
            expect(imgElement).toHaveAttribute('src', photo.url);

            const titleElement = screen.getByText(`Card title: ${photo.title}`);
            expect(titleElement).toBeInTheDocument();
        });

        // Проверяем наличие компонента Head
        const headElement = screen.getByText(/Text Hello World/i);
        expect(headElement).toBeInTheDocument();

        // Проверяем наличие ссылки
        const linkElement = screen.getByText(/Go somewhere here/i);
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', 'http');
    });

    test('renders Head component with correct children', () => {
        render(<Card />);

        // Проверяем содержимое компонента Head
        const divElement = screen.getByText(/Div here/i);
        const paragraphElement = screen.getByText(/Paragraph here/i);
        expect(divElement).toBeInTheDocument();
        expect(paragraphElement).toBeInTheDocument();
    });
});
