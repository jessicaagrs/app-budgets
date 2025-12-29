import { Budget } from '@/types/budget.type';

const getBudgets = async () => {
  try {
    const response = await fetch('https://api.npoint.io/66a4af04d96f24d35864', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(
        'Não foi possível obter os orçamentos, tente novamente mais tarde.'
      );
    }

    const data = (await response.json()) as Budget[];
    return data;
  } catch (error) {
    console.error('Log getBudgets:', error);
    return [];
  }
};

export { getBudgets };
