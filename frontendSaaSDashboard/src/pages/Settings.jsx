import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card.jsx";
import { Input } from "../components/ui/input.jsx";
import { Label } from "../components/ui/label.jsx";
import { Button } from "../components/ui/button.jsx";
import { Switch } from "../components/ui/switch.jsx";

const settingsSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  notifications: z.boolean(),
});

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    notifications: true,
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(settingsSchema),
    defaultValues: formData,
  });

  const onSubmit = (data) => {
    console.log('Settings updated:', data);
    setFormData(data);
  };

  return (
    <Card className={theme === 'dark' ? 'bg-gray-800 text-white' : ''}>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              {...register('name')}
              className={theme === 'dark' ? 'bg-gray-700 text-white' : ''}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              className={theme === 'dark' ? 'bg-gray-700 text-white' : ''}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="dark-mode"
              checked={theme === 'dark'}
              onCheckedChange={toggleTheme}
            />
            <Label htmlFor="dark-mode">Dark Mode</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="notifications"
              {...register('notifications')}
            />
            <Label htmlFor="notifications">Enable Notifications</Label>
          </div>
          <Button type="submit">Save Settings</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Settings;

