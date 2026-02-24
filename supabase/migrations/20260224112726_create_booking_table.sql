/*
  # Create booking submissions table

  1. New Tables
    - `booking_submissions`
      - `id` (uuid, primary key)
      - `name` (text, required) - Client's full name
      - `email` (text, required) - Client's email address
      - `phone` (text, required) - Client's phone number
      - `preferred_date` (date, required) - Preferred appointment date
      - `preferred_time` (text, required) - Preferred appointment time
      - `service_type` (text, required) - Type of dental service requested
      - `additional_notes` (text, optional) - Any additional information
      - `created_at` (timestamptz) - Submission timestamp
      - `status` (text) - Booking status (pending, confirmed, cancelled)
  
  2. Security
    - Enable RLS on `booking_submissions` table
    - Add policy for public INSERT access (for form submissions)
    - Add policy for authenticated admin SELECT access
  
  3. Notes
    - Public can submit bookings without authentication
    - Only authenticated users can view submissions
*/

CREATE TABLE IF NOT EXISTS booking_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  service_type text NOT NULL,
  additional_notes text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE booking_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit bookings"
  ON booking_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view bookings"
  ON booking_submissions
  FOR SELECT
  TO authenticated
  USING (true);