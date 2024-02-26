import React from 'react';
import '@testing-library/jest-dom';
import userEvent, { UserEvent } from '@testing-library/user-event';
import { screen, render, act } from '@testing-library/react';
import DeviceButton from './DeviceButton';

let	mockAdd: jest.Mock;
let container: HTMLElement;
let user: UserEvent;

beforeEach(() =>
{
	mockAdd = jest.fn();
	({ container } = render(<DeviceButton add={mockAdd}/>));
	user = userEvent.setup();
})

describe('DeviceButton tests', () =>
{
	it('DeviceButton text is Actions', () =>
	{
		//Arrange
		//Act
		const buttonElement = screen.getByRole('button');
		//Assert
		expect(buttonElement).toHaveTextContent('Actions');
	})

	it('click DeviceButton displays action-menu', async () =>
	{
		//Arrange
		const actionsButton = container.querySelector('#action-button');
		//Act
		await act(async () => 
		{
			await user.click(actionsButton!);
		});
		const menu = container.querySelector('#action-menu');
		//Assert
		screen.debug();
		expect(menu).toBeDefined();
	})
})
